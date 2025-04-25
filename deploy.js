const hre = require("hardhat");
const ethers = require("ethers");
const fs = require("fs");
require("dotenv").config();
// Load environment variables
const { sei_atlantic_2 } = require("./hardhat.config.js");

// Read the compiled contract artifact
const contractArtifact = JSON.parse(
  fs.readFileSync("./artifacts/contracts/MemeToken.sol/MemeToken.json")
);

// Initialize provider and wallet
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

async function deployToken(name, symbol, supply, recipient) {
  try {
    console.log('Starting deployment...');
    
    // Create contract factory using ethers.js
    const factory = new ethers.ContractFactory(
      contractArtifact.abi,
      contractArtifact.bytecode,
      wallet
    );
    console.log('Contract factory created...');
    
    // Deploy the contract
    const token = await factory.deploy(name, symbol, supply, recipient);
    console.log('Deployment transaction sent:', token.deploymentTransaction().hash);
    
    // Wait for deployment
    await token.waitForDeployment();
    const address = await token.getAddress();
    console.log('Contract deployed at:', address);
    
    // Wait for additional confirmations
    await token.deploymentTransaction().wait(2);
    console.log('Deployment confirmed');
    
    return address;
  } catch (error) {
    console.error('Deployment error:', error);
    throw error;
  }
}

async function verifyContract(address, constructorArguments) {
  try {
    console.log('Waiting for contract to be propagated on the network...');
    await new Promise(resolve => setTimeout(resolve, 30000));

    console.log('Verifying contract...');
    
    await hre.run("verify:verify", {
      address: address,
      constructorArguments: constructorArguments,
      contract: "contracts/MemeToken.sol:MemeToken",
      network: sei_atlantic_2
    });

    return true;
  } catch (error) {
    console.error("Verification error:", error);
    throw error;
  }
}

module.exports = {
  deployToken,
  verifyContract
};
