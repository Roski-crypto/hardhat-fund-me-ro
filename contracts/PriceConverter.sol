// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library PriceConverter {
      function getPrice(
            AggregatorV3Interface priceFeed
      ) internal view returns (uint256) {
            (, int256 price, , , ) = priceFeed.latestRoundData();
            return uint256(price * 1e10); //1**10 == 10000000000
      }

      function getConversionRate(
            uint256 ethAmount,
            AggregatorV3Interface priceFeed
      ) internal view returns (uint256) {
            uint256 ethPrice = getPrice(priceFeed);
            //2794_900000000000000000 ETH/USD
            //1_000000000000000000 ETH
            uint256 ethAmountInUsd = (ethPrice * ethAmount) / 1e18;
            return ethAmountInUsd;
      }
}
