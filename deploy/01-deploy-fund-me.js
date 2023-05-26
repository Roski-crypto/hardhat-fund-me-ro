const { network } = require("hardhat")
const { networkConfig, developmentChains } = require("../helper-hardhat-config")
require("dotenv").config()
const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
      const { deploy, log } = deployments
      const { deployer } = await getNamedAccounts()
      const chainId = network.config.chainId

      //const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPricefeed"]
      let ethUsdPriceFeedAddress
      if (chainId == 31337) {
            ethUsdAggregator = await deployments.get("MockV3Aggregator")
            ethUsdPriceFeedAddress = ethUsdAggregator.address
      } else {
            ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPricefeed"]
      }
      const args = ethUsdPriceFeedAddress
      const fundMe = await deploy("FundMe", {
            args: [args],
            from: deployer,
            log: true,
            waitConfirmations: network.config.blockConfirmations || 1,
      })
      if (
            !developmentChains.includes(network.name) &&
            process.env.ETHERSCAN_API_KEY
      ) {
            await verify(fundMe.address, [args])
      }
      log("-----------------------------------------------------")
}

module.exports.tags = ["all", "fundMe"]
