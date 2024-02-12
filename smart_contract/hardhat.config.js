require("@nomiclabs/hardhat-waffle")

require('dotenv').config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_ALCHEMY_URL,
      accounts: [ process.env.METAMASK_PRIVATE_KEY ]
    }
  }
}