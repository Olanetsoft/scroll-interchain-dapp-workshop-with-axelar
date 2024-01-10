const hre = require("hardhat");

async function main() {
  const Bounty = await hre.ethers.deployContract("Bounty", [
    "0xe432150cce91c13a887f7D836923d5597adD8E31",
    "0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6",
  ]);

  await Bounty.waitForDeployment();

  console.log(`Bounty contract deployed to ${await Bounty.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Get the address of Axelar Gateway and Gas Service contracts on testnet here: https://docs.axelar.dev/resources/testnet
// Scroll Sepolia testnet: 0xA5D8FEacdC8324eeC0DA2a3Ee4A20F7186F7257f
// Eth Sepolia testnet: 0x09b333934a1bC247695c4a131DBc8935891EB612
