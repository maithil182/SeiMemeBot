require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

module.exports = {
  defaultNetwork: "sei_atlantic_2",
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "paris",
    },
  },
  networks: {
    sei_atlantic_2: {
      url: process.env.RPC_URL || "https://evm-rpc-testnet.sei-apis.com",
      chainId: 1328,
      accounts: [process.env.PRIVATE_KEY],
      gas: "auto",
      gasPrice: "auto",
    },
  },
  etherscan: {
    apiKey: {
      sei_atlantic_2: process.env.SEITRACE_KEY || "any-string"
    },
    customChains: [
      {
        network: "sei_atlantic_2",
        chainId: 1328,
        urls: {
          apiURL: "https://seitrace.com/atlantic-2/api",
          browserURL: "https://seitrace.com"
        }
      }
    ]
  }
};
