export interface NetworkVars {
  //Tokens
  daiAddress: string;
  ghstAddress: string;

  //Curve
  bancorMM: string;
  fundraising: string;
}

export const mainnetVars: NetworkVars = {
  //Tokens
  daiAddress: "0x6b175474e89094c44da98b954eedeac495271d0f", //DAI token
  ghstAddress: "0x3F382DbD960E3a9bbCeaE22651E88158d2791550", //GHST token

  //Curve
  bancorMM: "0x8fcec74880b7c8ce2f81405a037baa7b28d7e1c6", //market maker
  fundraising: "0xe5ecfb44bccd7a585fa7f4a8e02c450e525af2e4", //fundraising
};
