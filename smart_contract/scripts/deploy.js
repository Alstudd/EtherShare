// Run: npx hardhat run scripts/deploy.js --network sepolia
// npx hardhat console --network sepolia
// After deployment: artifacts --> contracts --> Transactions.sol --> Transactions.json --> abi (contract application binary interface)

// const hre = require("hardhat");

const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();
  await transactions.deployed();
  console.log("Transactions deployed to:", transactions.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();