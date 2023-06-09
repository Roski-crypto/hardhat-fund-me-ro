require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("hardhat-gas-reporter")
require("solidity-coverage")
require("solhint")
require("hardhat-deploy")

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
//const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
      defaultNetwork: "hardhat",
      networks: {
            sepolia: {
                  url: SEPOLIA_RPC_URL,
                  accounts: [PRIVATE_KEY],
                  chainId: 11155111,
                  blockConfirmations: 6,
            },
            localhost: {
                  url: "http://127.0.0.1:8545/",
                  //accounts:
                  chainId: 31337,
            },
      },
      //solidity: "0.8.18",
      solidity: {
            compilers: [{ version: "0.8.18" }, { version: "0.6.5" }],
      },
      etherscan: {
            apiKey: ETHERSCAN_API_KEY,
      },
      gasReporter: {
            enabled: true,
            outputfile: "gas-report.txt",
            noColors: true,
            currency: "USD",
            //coinmarketCap: COINMARKETCAP_API_KEY,
            //token:"ethers",
      },
      namedAccounts: {
            deployer: {
                  default: 0,
            },
            user: {
                  default: 1,
            },
      },
      //mocha: {
      // timeout: 500000,
      // },
}
