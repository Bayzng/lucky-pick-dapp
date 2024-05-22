import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying PayLisk contract with the account:", deployer.address);

    const Lottery = await ethers.getContractFactory("Lottery");
    const lottery = await Lottery.deploy(); // Deploy the contract

    console.log("Target set to:", lottery.target);

    // Target set to: 0xAc5845fE83BaC02c404613FE7DEF67F4FD853Bd9
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
