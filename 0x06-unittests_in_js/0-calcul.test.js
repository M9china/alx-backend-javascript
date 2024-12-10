// 0-calcul.test.js
const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
  it("should return the sum of two integers", () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it("should round both numbers before adding", () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it("should round 1.5 up correctly", () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it("should handle negative numbers", () => {
    assert.strictEqual(calculateNumber(-1.4, -3.7), -5);
    assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
    assert.strictEqual(calculateNumber(-1.6, -3.7), -6);
  });

  it("should handle zero as input", () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0, 3.7), 4);
    assert.strictEqual(calculateNumber(1.2, 0), 1);
  });

  it("should handle large numbers", () => {
    assert.strictEqual(calculateNumber(123456.7, 0.4), 123457);
    assert.strictEqual(calculateNumber(123456.5, 0.5), 123457);
  });
});
