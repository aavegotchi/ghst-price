import { BigNumber, Contract, providers } from "ethers";
import { formatEther } from "ethers/lib/utils";
import { abi as fundraisingAbi } from "../web3/abi/AragonFundraisingController";
import ATokenABI from "../web3/abi/ATokenABI.json";
import BancorMarketMakerABI from "../web3/abi/BatchedBancorMarketMaker.json";
import { mainnetVars } from "../web3/constants";

export async function PriceCalculator() {
  const provider = new providers.StaticJsonRpcProvider();

  //Instantiate all the contracts
  if (!mainnetVars.bancorMM)
    throw "Bancor address doesn't exist for given network";

  const BatchedBancorMarketMaker = new Contract(
    mainnetVars.bancorMM,
    BancorMarketMakerABI,
    provider
  );

  const BondedToken = new Contract(
    mainnetVars.ghstAddress,
    ATokenABI,
    provider
  );

  if (!mainnetVars.daiAddress)
    throw "Dai address doesn't exist for given network";

  if (!mainnetVars.fundraising)
    throw "Fundraising address doesn't exist for given network";

  const AF = new Contract(mainnetVars.fundraising, fundraisingAbi, provider);

  const collateralFilter =
    BatchedBancorMarketMaker.filters.AddCollateralToken();
  const collaterals = await BatchedBancorMarketMaker.queryFilter(
    collateralFilter
  );

  //The formula for calculating price can be found here:
  //https://github.com/AragonBlack/fundraising/tree/master/apps/aragon-fundraising/app

  const daiReserveRatio = BigNumber.from(collaterals[0].args?.reserveRatio);

  //Virtual Supply and Virtual Balance are *not* displayed on the UI, but were added in to total supply because the price of GHST was 0.1 DAI during presale, but launched on the bonding curve at 0.2 DAI. Therefore, they must be included in total supply to accurately calculate the price.
  const virtualSupply = BigNumber.from(collaterals[0].args?.virtualSupply);
  const virtualBalance = BigNumber.from(collaterals[0].args?.virtualBalance);

  //Calculate total supply
  const totalSupply = BigNumber.from(await BondedToken.totalSupply());

  //Tokens to be minted are those tokens that have been purchased, but not claimed from the bonding curve yet.
  const tokensToBeMinted = BigNumber.from(
    await BatchedBancorMarketMaker.tokensToBeMinted()
  );

  const finalTotalSupply = totalSupply.add(tokensToBeMinted).add(virtualSupply);

  //Display supply does not include virtual supply.
  const finalDisplaySupply = totalSupply.add(tokensToBeMinted);

  //Calculate balance of reserve
  const reserveAddress = await BatchedBancorMarketMaker.reserve();
  const collateralsToBeClaimed = BigNumber.from(
    await BatchedBancorMarketMaker.collateralsToBeClaimed(
      mainnetVars.daiAddress
    )
  );

  const balanceOf = BigNumber.from(
    await AF.balanceOf(reserveAddress, mainnetVars.daiAddress)
  );

  const finalReserveBalance = balanceOf
    .add(virtualBalance)
    .sub(collateralsToBeClaimed);

  //Get PPM
  const PPM = 1000000;
  // Price
  const price = BigNumber.from(PPM)
    .mul(BigNumber.from(PPM))
    .mul(finalReserveBalance)
    .div(finalTotalSupply.mul(daiReserveRatio));

  return {
    data: {
      price: Number(price) / PPM,
      finalTotalSupply: Number(formatEther(finalTotalSupply)),
      finalDisplaySupply: Number(formatEther(finalDisplaySupply)),
    },
  };
}
export default PriceCalculator;
