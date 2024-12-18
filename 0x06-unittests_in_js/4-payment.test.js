#!/usr/bin/node

const sinon = require("sinon");
const { expect } = require("chai");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./4-payment");

describe("sendPaymentRequestToApi", () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    // Stub Utils.calculateNumber to return a fixed value of 10
    calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(10);

    // Spy on console.log
    consoleLogSpy = sinon.spy(console, "log");
  });

  afterEach(() => {
    // Restore the stub and spy
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it("should call Utils.calculateNumber with SUM, totalAmount, and totalShipping", () => {
    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assert that the stub was called once
    expect(calculateNumberStub.calledOnce).to.be.true;

    // Assert that the stub was called with correct arguments
    expect(calculateNumberStub.calledWith("SUM", 100, 20)).to.be.true;
  });

  it("should log the correct message to the console", () => {
    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called once
    expect(consoleLogSpy.calledOnce).to.be.true;

    // Assert that console.log logged the correct message
    expect(consoleLogSpy.calledWith("The total is: 10")).to.be.true;
  });
});
