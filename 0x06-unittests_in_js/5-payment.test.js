#!/usr/bin/node

const sinon = require("sinon");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./5-payment");

describe("sendPaymentRequestToApi", () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Spy on console.log
    consoleLogSpy = sinon.spy(console, "log");
  });

  afterEach(() => {
    // Restore the spy
    consoleLogSpy.restore();
  });

  it('should log "The total is: 120" and call console.log once for 100, 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called once
    expect(consoleLogSpy.calledOnce).to.be.true;

    // Assert that console.log logged the correct message
    expect(consoleLogSpy.calledWith("The total is: 120")).to.be.true;
  });

  it('should log "The total is: 20" and call console.log once for 10, 10', () => {
    sendPaymentRequestToApi(10, 10);

    // Assert that console.log was called once
    expect(consoleLogSpy.calledOnce).to.be.true;

    // Assert that console.log logged the correct message
    expect(consoleLogSpy.calledWith("The total is: 20")).to.be.true;
  });
});
