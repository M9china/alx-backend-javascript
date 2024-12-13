#!/usr/bin/node

const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", () => {
  describe("SUM", () => {
    it("should return the sum of two rounded numbers", () => {
      assert.strictEqual(calculateNumber("SUM", 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber("SUM", 1.7, 4.3), 6);
      assert.strictEqual(calculateNumber("SUM", -1.4, 4.5), 4);
    });
  });

  describe("SUBTRACT", () => {
    it("should return the difference of two rounded numbers", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber("SUBTRACT", 1.7, 4.3), -2);
      assert.strictEqual(calculateNumber("SUBTRACT", -1.4, -4.5), 3);
    });
  });

  describe("DIVIDE", () => {
    it("should return the division of two rounded numbers", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
      assert.strictEqual(calculateNumber("DIVIDE", 4.4, 1.3), 4);
    });

    it('should return "Error" when dividing by zero', () => {
      assert.strictEqual(calculateNumber("DIVIDE", 1.4, 0), "Error");
      assert.strictEqual(calculateNumber("DIVIDE", 1.4, 0.4), "Error");
    });
  });

  describe("Invalid type", () => {
    it("should throw an error for invalid type", () => {
      assert.throws(
        () => calculateNumber("MULTIPLY", 1.4, 4.5),
        /Invalid type/
      );
    });
  });
});
