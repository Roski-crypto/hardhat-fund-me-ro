const networkConfig = {
      31337: {
            name: "localhost",
            // ethUsdPriceFeed: "",
      },
      11155111: {
            name: "sepolia",
            ethUsdPricefeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
      },
}
const developmentChains = ["hardhat", "localhost"]
const DECIMALS = "8"
const INITIAL_ANSWER = "300000000000" // 2000

module.exports = {
      networkConfig,
      developmentChains,
      DECIMALS,
      INITIAL_ANSWER,
}
