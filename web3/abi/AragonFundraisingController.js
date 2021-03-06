module.exports = {
  environments: {
    default: {
      registry: "0x5f6f7e8cc7346a11ca2def8f827b7a0b612c56a1",
      appName: "aragon-fundraising.aragonpm",
      network: "rpc",
    },
    mainnet: {
      registry: "0x314159265dd8dbb310642f98f50c066173c1259b",
      appName: "aragon-fundraising.aragonpm",
      network: "mainnet",
    },
    rinkeby: {
      registry: "0x98Df287B6C145399Aaa709692c8D308357bC085D",
      appName: "aragon-fundraising.aragonpm",
      network: "rinkeby",
    },
    hatch: {
      registry: "0x98Df287B6C145399Aaa709692c8D308357bC085D",
      appName: "aragon-fundraising.hatch.aragonpm",
      network: "rinkeby",
    },
    staging: {
      registry: "0xfe03625ea880a8cba336f9b5ad6e15b0a3b5a939",
      appName: "aragon-fundraising.aragonpm",
      network: "rinkeby",
    },
  },
  roles: [
    {
      name: "Update beneficiary address",
      id: "UPDATE_BENEFICIARY_ROLE",
      params: [],
      bytes:
        "0xf7ea2b80c7b6a2cab2c11d2290cb005c3748397358a25e17113658c83b732593",
    },
    {
      name: "Update fees",
      id: "UPDATE_FEES_ROLE",
      params: [],
      bytes:
        "0x5f9be2932ed3a723f295a763be1804c7ebfd1a41c1348fb8bdf5be1c5cdca822",
    },
    {
      name: "Add tokens as whitelisted collaterals",
      id: "ADD_COLLATERAL_TOKEN_ROLE",
      params: [],
      bytes:
        "0x217b79cb2bc7760defc88529853ef81ab33ae5bb315408ce9f5af09c8776662d",
    },
    {
      name: "Remove tokens as whitelisted collaterals",
      id: "REMOVE_COLLATERAL_TOKEN_ROLE",
      params: [],
      bytes:
        "0x2044e56de223845e4be7d0a6f4e9a29b635547f16413a6d1327c58d9db438ee2",
    },
    {
      name: "Update collateral tokens collateralization settings",
      id: "UPDATE_COLLATERAL_TOKEN_ROLE",
      params: [],
      bytes:
        "0xe0565c2c43e0d841e206bb36a37f12f22584b4652ccee6f9e0c071b697a2e13d",
    },
    {
      name: "Update maximum tap rate increase percentage",
      id: "UPDATE_MAXIMUM_TAP_RATE_INCREASE_PCT_ROLE",
      params: [],
      bytes:
        "0x5d94de7e429250eee4ff97e30ab9f383bea3cd564d6780e0a9e965b1add1d207",
    },
    {
      name: "Update maximum tap floor decrease percentage",
      id: "UPDATE_MAXIMUM_TAP_FLOOR_DECREASE_PCT_ROLE",
      params: [],
      bytes:
        "0x57c9c67896cf0a4ffe92cbea66c2f7c34380af06bf14215dabb078cf8a6d99e1",
    },
    {
      name: "Add collateral tokens tap",
      id: "ADD_TOKEN_TAP_ROLE",
      params: [],
      bytes:
        "0xbc9cb5e3f7ce81c4fd021d86a4bcb193dee9df315b540808c3ed59a81e596207",
    },
    {
      name: "Update collateral tokens tap",
      id: "UPDATE_TOKEN_TAP_ROLE",
      params: [],
      bytes:
        "0xdb8c88bedbc61ea0f92e1ce46da0b7a915affbd46d1c76c4bbac9a209e4a8416",
    },
    {
      name: "Open presale",
      id: "OPEN_PRESALE_ROLE",
      params: [],
      bytes:
        "0xf323aa41eef4850a8ae7ebd047d4c89f01ce49c781f3308be67303db9cdd48c2",
    },
    {
      name: "Open trading",
      id: "OPEN_TRADING_ROLE",
      params: [],
      bytes:
        "0x26ce034204208c0bbca4c8a793d17b99e546009b1dd31d3c1ef761f66372caf6",
    },
    {
      name: "Contribute to presale",
      id: "CONTRIBUTE_ROLE",
      params: [],
      bytes:
        "0x9ccaca4edf2127f20c425fdd86af1ba178b9e5bee280cd70d88ac5f6874c4f07",
    },
    {
      name: "Open buy orders",
      id: "OPEN_BUY_ORDER_ROLE",
      params: [],
      bytes:
        "0xa589c8f284b76fc8d510d9d553485c47dbef1b0745ae00e0f3fd4e28fcd77ea7",
    },
    {
      name: "Open sell orders",
      id: "OPEN_SELL_ORDER_ROLE",
      params: [],
      bytes:
        "0xd68ba2b769fa37a2a7bd4bed9241b448bc99eca41f519ef037406386a8f291c0",
    },
    {
      name: "Transfer funds from the reserve to the beneficiary",
      id: "WITHDRAW_ROLE",
      params: [],
      bytes:
        "0x5d8e12c39142ff96d79d04d15d1ba1269e4fe57bb9d26f43523628b34ba108ec",
    },
  ],
  path: "contracts/AragonFundraisingController.sol",
  env: {
    registry: "0x314159265dd8dbb310642f98f50c066173c1259b",
    appName: "aragon-fundraising.aragonpm",
    network: "mainnet",
  },
  appName: "aragon-fundraising.aragonpm",
  appId: "0x668ac370eed7e5861234d1c0a1e512686f53594fcb887e5bcecc35675a4becac",
  abi: [
    {
      constant: true,
      inputs: [],
      name: "hasInitialized",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "TO_RESET_CAP",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "OPEN_TRADING_ROLE",
      outputs: [
        {
          name: "",
          type: "bytes32",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "OPEN_PRESALE_ROLE",
      outputs: [
        {
          name: "",
          type: "bytes32",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "marketMaker",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "_script",
          type: "bytes",
        },
      ],
      name: "getEVMScriptExecutor",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "OPEN_BUY_ORDER_ROLE",
      outputs: [
        {
          name: "",
          type: "bytes32",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "UPDATE_COLLATERAL_TOKEN_ROLE",
      outputs: [
        {
          name: "",
          type: "bytes32",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "getRecoveryVault",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "UPDATE_BENEFICIARY_ROLE",
      outputs: [
        {
          name: "",
          type: "bytes32",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "ADD_COLLATERAL_TOKEN_ROLE",
      outputs: [
        {
          name: "",
          type: "bytes32",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "UPDATE_FEES_ROLE",
      outputs: [
        {
          name: "",
          type: "bytes32",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "token",
          type: "address",
        },
      ],
      name: "allowRecoverability",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "appId",
      outputs: [
        {
          name: "",
          type: "bytes32",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "getInitializationBlock",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "ADD_TOKEN_TAP_ROLE",
      outputs: [
        {
          name: "",
          type: "bytes32",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_token",
          type: "address",
        },
      ],
      name: "transferToVault",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "_sender",
          type: "address",
        },
        {
          name: "_role",
          type: "bytes32",
        },
        {
          name: "_params",
          type: "uint256[]",
        },
      ],
      name: "canPerform",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "CONTRIBUTE_ROLE",
      outputs: [
        {
          name: "",
          type: "bytes32",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "getEVMScriptRegistry",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "UPDATE_TOKEN_TAP_ROLE",
      outputs: [
        {
          name: "",
          type: "bytes32",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "REMOVE_COLLATERAL_TOKEN_ROLE",
      outputs: [
        {
          name: "",
          type: "bytes32",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "UPDATE_MAXIMUM_TAP_RATE_INCREASE_PCT_ROLE",
      outputs: [
        {
          name: "",
          type: "bytes32",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "UPDATE_MAXIMUM_TAP_FLOOR_DECREASE_PCT_ROLE",
      outputs: [
        {
          name: "",
          type: "bytes32",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "reserve",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      name: "toReset",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "OPEN_SELL_ORDER_ROLE",
      outputs: [
        {
          name: "",
          type: "bytes32",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "kernel",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "isPetrified",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "WITHDRAW_ROLE",
      outputs: [
        {
          name: "",
          type: "bytes32",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "tap",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "presale",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "executor",
          type: "address",
        },
        {
          indexed: false,
          name: "script",
          type: "bytes",
        },
        {
          indexed: false,
          name: "input",
          type: "bytes",
        },
        {
          indexed: false,
          name: "returnData",
          type: "bytes",
        },
      ],
      name: "ScriptResult",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "vault",
          type: "address",
        },
        {
          indexed: true,
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          name: "amount",
          type: "uint256",
        },
      ],
      name: "RecoverToVault",
      type: "event",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_presale",
          type: "address",
        },
        {
          name: "_marketMaker",
          type: "address",
        },
        {
          name: "_reserve",
          type: "address",
        },
        {
          name: "_tap",
          type: "address",
        },
        {
          name: "_toReset",
          type: "address[]",
        },
      ],
      name: "initialize",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_beneficiary",
          type: "address",
        },
      ],
      name: "updateBeneficiary",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_buyFeePct",
          type: "uint256",
        },
        {
          name: "_sellFeePct",
          type: "uint256",
        },
      ],
      name: "updateFees",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "openPresale",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "closePresale",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "contribute",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_contributor",
          type: "address",
        },
        {
          name: "_vestedPurchaseId",
          type: "uint256",
        },
      ],
      name: "refund",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "openTrading",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_collateral",
          type: "address",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "openBuyOrder",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_collateral",
          type: "address",
        },
        {
          name: "_amount",
          type: "uint256",
        },
      ],
      name: "openSellOrder",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_buyer",
          type: "address",
        },
        {
          name: "_batchId",
          type: "uint256",
        },
        {
          name: "_collateral",
          type: "address",
        },
      ],
      name: "claimBuyOrder",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_seller",
          type: "address",
        },
        {
          name: "_batchId",
          type: "uint256",
        },
        {
          name: "_collateral",
          type: "address",
        },
      ],
      name: "claimSellOrder",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_collateral",
          type: "address",
        },
        {
          name: "_virtualSupply",
          type: "uint256",
        },
        {
          name: "_virtualBalance",
          type: "uint256",
        },
        {
          name: "_reserveRatio",
          type: "uint32",
        },
        {
          name: "_slippage",
          type: "uint256",
        },
        {
          name: "_rate",
          type: "uint256",
        },
        {
          name: "_floor",
          type: "uint256",
        },
      ],
      name: "addCollateralToken",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_collateral",
          type: "address",
        },
        {
          name: "_virtualSupply",
          type: "uint256",
        },
        {
          name: "_virtualBalance",
          type: "uint256",
        },
        {
          name: "_reserveRatio",
          type: "uint32",
        },
        {
          name: "_slippage",
          type: "uint256",
        },
      ],
      name: "reAddCollateralToken",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_collateral",
          type: "address",
        },
      ],
      name: "removeCollateralToken",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_collateral",
          type: "address",
        },
        {
          name: "_virtualSupply",
          type: "uint256",
        },
        {
          name: "_virtualBalance",
          type: "uint256",
        },
        {
          name: "_reserveRatio",
          type: "uint32",
        },
        {
          name: "_slippage",
          type: "uint256",
        },
      ],
      name: "updateCollateralToken",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_maximumTapRateIncreasePct",
          type: "uint256",
        },
      ],
      name: "updateMaximumTapRateIncreasePct",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_maximumTapFloorDecreasePct",
          type: "uint256",
        },
      ],
      name: "updateMaximumTapFloorDecreasePct",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_token",
          type: "address",
        },
        {
          name: "_rate",
          type: "uint256",
        },
        {
          name: "_floor",
          type: "uint256",
        },
      ],
      name: "addTokenTap",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_token",
          type: "address",
        },
        {
          name: "_rate",
          type: "uint256",
        },
        {
          name: "_floor",
          type: "uint256",
        },
      ],
      name: "updateTokenTap",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_token",
          type: "address",
        },
      ],
      name: "updateTappedAmount",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_token",
          type: "address",
        },
      ],
      name: "withdraw",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "token",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "contributionToken",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "_token",
          type: "address",
        },
      ],
      name: "getMaximumWithdrawal",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "_collateral",
          type: "address",
        },
      ],
      name: "collateralsToBeClaimed",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "_who",
          type: "address",
        },
        {
          name: "_token",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ],
  functions: [
    {
      sig: "initialize(address,address,address,address,address[])",
      roles: [],
      notice: "Initialize Aragon Fundraising controller",
      abi: {
        constant: false,
        inputs: [
          {
            name: "_presale",
            type: "address",
          },
          {
            name: "_marketMaker",
            type: "address",
          },
          {
            name: "_reserve",
            type: "address",
          },
          {
            name: "_tap",
            type: "address",
          },
          {
            name: "_toReset",
            type: "address[]",
          },
        ],
        name: "initialize",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    },
    {
      sig: "updateBeneficiary(address)",
      roles: ["UPDATE_BENEFICIARY_ROLE"],
      notice: "Update beneficiary to `_beneficiary`",
      abi: {
        constant: false,
        inputs: [
          {
            name: "_beneficiary",
            type: "address",
          },
        ],
        name: "updateBeneficiary",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    },
    {
      sig: "updateFees(uint256,uint256)",
      roles: ["UPDATE_FEES_ROLE"],
      notice:
        "Update fees deducted from buy and sell orders to respectively `@formatPct(_buyFeePct)`% and `@formatPct(_sellFeePct)`%",
      abi: {
        constant: false,
        inputs: [
          {
            name: "_buyFeePct",
            type: "uint256",
          },
          {
            name: "_sellFeePct",
            type: "uint256",
          },
        ],
        name: "updateFees",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    },
    {
      sig: "openPresale()",
      roles: ["OPEN_PRESALE_ROLE"],
      notice: "Open presale",
      abi: {
        constant: false,
        inputs: [],
        name: "openPresale",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    },
    {
      sig: "closePresale()",
      roles: [],
      notice: "Close presale and open trading",
      abi: {
        constant: false,
        inputs: [],
        name: "closePresale",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    },
    {
      sig: "contribute(uint256)",
      roles: ["CONTRIBUTE_ROLE"],
      notice:
        "Contribute to the presale up to `@tokenAmount(self.contributionToken(): address, _value)`",
      abi: {
        constant: false,
        inputs: [
          {
            name: "_value",
            type: "uint256",
          },
        ],
        name: "contribute",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
      },
    },
    {
      sig: "refund(address,uint256)",
      roles: [],
      notice:
        "Refund `_contributor`'s presale contribution #`_vestedPurchaseId`",
      abi: {
        constant: false,
        inputs: [
          {
            name: "_contributor",
            type: "address",
          },
          {
            name: "_vestedPurchaseId",
            type: "uint256",
          },
        ],
        name: "refund",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    },
    {
      sig: "openTrading()",
      roles: ["OPEN_TRADING_ROLE"],
      notice: "Open trading [enabling users to open buy and sell orders]",
      abi: {
        constant: false,
        inputs: [],
        name: "openTrading",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    },
    {
      sig: "openBuyOrder(address,uint256)",
      roles: ["OPEN_BUY_ORDER_ROLE"],
      notice: "Open a buy order worth `@tokenAmount(_collateral, _value)`",
      abi: {
        constant: false,
        inputs: [
          {
            name: "_collateral",
            type: "address",
          },
          {
            name: "_value",
            type: "uint256",
          },
        ],
        name: "openBuyOrder",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
      },
    },
    {
      sig: "openSellOrder(address,uint256)",
      roles: ["OPEN_SELL_ORDER_ROLE"],
      notice:
        "Open a sell order worth `@tokenAmount(self.token(): address, _amount)` against `_collateral.symbol(): string`",
      abi: {
        constant: false,
        inputs: [
          {
            name: "_collateral",
            type: "address",
          },
          {
            name: "_amount",
            type: "uint256",
          },
        ],
        name: "openSellOrder",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    },
    {
      sig: "claimBuyOrder(address,uint256,address)",
      roles: [],
      notice:
        "Claim the results of `_collateral.symbol(): string` buy orders from batch #`_batchId`",
      abi: {
        constant: false,
        inputs: [
          {
            name: "_buyer",
            type: "address",
          },
          {
            name: "_batchId",
            type: "uint256",
          },
          {
            name: "_collateral",
            type: "address",
          },
        ],
        name: "claimBuyOrder",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    },
    {
      sig: "claimSellOrder(address,uint256,address)",
      roles: [],
      notice:
        "Claim the results of `_collateral.symbol(): string` sell orders from batch #`_batchId`",
      abi: {
        constant: false,
        inputs: [
          {
            name: "_seller",
            type: "address",
          },
          {
            name: "_batchId",
            type: "uint256",
          },
          {
            name: "_collateral",
            type: "address",
          },
        ],
        name: "claimSellOrder",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    },
    {
      sig: "addCollateralToken(address,uint256,uint256,uint32,uint256,uint256,uint256)",
      roles: ["ADD_COLLATERAL_TOKEN_ROLE"],
      notice:
        "Add `_collateral.symbol(): string` as a whitelisted collateral token",
      abi: {
        constant: false,
        inputs: [
          {
            name: "_collateral",
            type: "address",
          },
          {
            name: "_virtualSupply",
            type: "uint256",
          },
          {
            name: "_virtualBalance",
            type: "uint256",
          },
          {
            name: "_reserveRatio",
            type: "uint32",
          },
          {
            name: "_slippage",
            type: "uint256",
          },
          {
            name: "_rate",
            type: "uint256",
          },
          {
            name: "_floor",
            type: "uint256",
          },
        ],
        name: "addCollateralToken",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    },
    {
      sig: "reAddCollateralToken(address,uint256,uint256,uint32,uint256)",
      roles: ["ADD_COLLATERAL_TOKEN_ROLE"],
      notice:
        "Re-add `_collateral.symbol(): string` as a whitelisted collateral token [if it has been un-whitelisted in the past]",
      abi: {
        constant: false,
        inputs: [
          {
            name: "_collateral",
            type: "address",
          },
          {
            name: "_virtualSupply",
            type: "uint256",
          },
          {
            name: "_virtualBalance",
            type: "uint256",
          },
          {
            name: "_reserveRatio",
            type: "uint32",
          },
          {
            name: "_slippage",
            type: "uint256",
          },
        ],
        name: "reAddCollateralToken",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    },
    {
      sig: "removeCollateralToken(address)",
      roles: ["REMOVE_COLLATERAL_TOKEN_ROLE"],
      notice:
        "Remove `_collateral.symbol(): string` as a whitelisted collateral token",
      abi: {
        constant: false,
        inputs: [
          {
            name: "_collateral",
            type: "address",
          },
        ],
        name: "removeCollateralToken",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    },
    {
      sig: "updateCollateralToken(address,uint256,uint256,uint32,uint256)",
      roles: ["UPDATE_COLLATERAL_TOKEN_ROLE"],
      notice:
        "Update `_collateral.symbol(): string` collateralization settings",
      abi: {
        constant: false,
        inputs: [
          {
            name: "_collateral",
            type: "address",
          },
          {
            name: "_virtualSupply",
            type: "uint256",
          },
          {
            name: "_virtualBalance",
            type: "uint256",
          },
          {
            name: "_reserveRatio",
            type: "uint32",
          },
          {
            name: "_slippage",
            type: "uint256",
          },
        ],
        name: "updateCollateralToken",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    },
    {
      sig: "updateMaximumTapRateIncreasePct(uint256)",
      roles: ["UPDATE_MAXIMUM_TAP_RATE_INCREASE_PCT_ROLE"],
      notice:
        "Update maximum tap rate increase percentage to `@formatPct(_maximumTapRateIncreasePct)`%",
      abi: {
        constant: false,
        inputs: [
          {
            name: "_maximumTapRateIncreasePct",
            type: "uint256",
          },
        ],
        name: "updateMaximumTapRateIncreasePct",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    },
    {
      sig: "updateMaximumTapFloorDecreasePct(uint256)",
      roles: ["UPDATE_MAXIMUM_TAP_FLOOR_DECREASE_PCT_ROLE"],
      notice:
        "Update maximum tap floor decrease percentage to `@formatPct(_maximumTapFloorDecreasePct)`%",
      abi: {
        constant: false,
        inputs: [
          {
            name: "_maximumTapFloorDecreasePct",
            type: "uint256",
          },
        ],
        name: "updateMaximumTapFloorDecreasePct",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    },
    {
      sig: "addTokenTap(address,uint256,uint256)",
      roles: ["ADD_TOKEN_TAP_ROLE"],
      notice:
        "Add tap for `_token.symbol(): string` with a rate of `@tokenAmount(_token, _rate)` per block and a floor of `@tokenAmount(_token, _floor)`",
      abi: {
        constant: false,
        inputs: [
          {
            name: "_token",
            type: "address",
          },
          {
            name: "_rate",
            type: "uint256",
          },
          {
            name: "_floor",
            type: "uint256",
          },
        ],
        name: "addTokenTap",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    },
    {
      sig: "updateTokenTap(address,uint256,uint256)",
      roles: ["UPDATE_TOKEN_TAP_ROLE"],
      notice:
        "Update tap for `_token.symbol(): string` with a rate of about `@tokenAmount(_token, 4 * 60 * 24 * 30 * _rate)` per month and a floor of `@tokenAmount(_token, _floor)`",
      abi: {
        constant: false,
        inputs: [
          {
            name: "_token",
            type: "address",
          },
          {
            name: "_rate",
            type: "uint256",
          },
          {
            name: "_floor",
            type: "uint256",
          },
        ],
        name: "updateTokenTap",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    },
    {
      sig: "updateTappedAmount(address)",
      roles: [],
      notice: "Update tapped amount for `_token.symbol(): string`",
      abi: {
        constant: false,
        inputs: [
          {
            name: "_token",
            type: "address",
          },
        ],
        name: "updateTappedAmount",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    },
    {
      sig: "withdraw(address)",
      roles: ["WITHDRAW_ROLE"],
      notice:
        "Transfer about `@tokenAmount(_token, self.getMaximumWithdrawal(_token): uint256)` from the reserve to the beneficiary",
      abi: {
        constant: false,
        inputs: [
          {
            name: "_token",
            type: "address",
          },
        ],
        name: "withdraw",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    },
  ],
  deprecatedFunctions: {},
};
