#!/usr/bin/node

const sinon = require("sinon");
const { expect } = require("chai");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", () => {
  it("should call Utils.calculateNumber with SUM, totalAmount, and totalShipping", () => {
    // Create a spy for Utils.calculateNumber
    const spy = sinon.spy(Utils, "calculateNumber");

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assert that the spy was called once
    expect(spy.calledOnce).to.be.true;

    // Assert that the spy was called with correct arguments
    expect(spy.calledWith("SUM", 100, 20)).to.be.true;

    // Restore the spy
    spy.restore();
  });
});
