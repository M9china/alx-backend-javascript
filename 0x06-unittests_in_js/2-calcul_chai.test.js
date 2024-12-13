#!/usr/bin/node

const { expect } = require("chai");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", () => {
  describe("SUM", () => {
    it("should return the sum of two rounded numbers", () => {
      expect(calculateNumber("SUM", 1.4, 4.5)).to.equal(6);
      expect(calculateNumber("SUM", 1.7, 4.3)).to.equal(6);
      expect(calculateNumber("SUM", -1.4, 4.5)).to.equal(4);
    });
  });

  describe("SUBTRACT", () => {
    it("should return the difference of two rounded numbers", () => {
      expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber("SUBTRACT", 1.7, 4.3)).to.equal(-2);
      expect(calculateNumber("SUBTRACT", -1.4, -4.5)).to.equal(3);
    });
  });

  describe("DIVIDE", () => {
    it("should return the division of two rounded numbers", () => {
      expect(calculateNumber("DIVIDE", 1.4, 4.5)).to.be.closeTo(0.2, 0.01);
      expect(calculateNumber("DIVIDE", 4.4, 1.3)).to.equal(4);
    });

    it('should return "Error" when dividing by zero', () => {
      expect(calculateNumber("DIVIDE", 1.4, 0)).to.equal("Error");
      expect(calculateNumber("DIVIDE", 1.4, 0.4)).to.equal("Error");
    });
  });

  describe("Invalid type", () => {
    it("should throw an error for invalid type", () => {
      expect(() => calculateNumber("MULTIPLY", 1.4, 4.5)).to.throw(
        "Invalid type"
      );
    });
  });
});
