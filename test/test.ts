import { expect } from "chai";
import { ethers } from "hardhat";

describe("ManuCoin", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("ManuCoin");

    const instance = await ContractFactory.deploy();
    await instance.deployed();

    expect(await instance.name()).to.equal("ManuCoin");
  });
});
