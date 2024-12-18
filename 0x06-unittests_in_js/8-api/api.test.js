const chai = require("chai");
const expect = chai.expect;
const request = require("request");

describe("Index page", () => {
  it("should return status code 200", (done) => {
    request("http://localhost:7865/", (err, res, body) => {
      if (err) {
        done(err);
      } else {
        expect(res.statusCode).to.equal(200);
        done();
      }
    });
  });

  it("should return the correct message", (done) => {
    request("http://localhost:7865/", (err, res, body) => {
      if (err) {
        done(err);
      } else {
        // Adjust with the actual message your API returns
        expect(body).to.include("Welcome to the payment system");
        done();
      }
    });
  });
});
