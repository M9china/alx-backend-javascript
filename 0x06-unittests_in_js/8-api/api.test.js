const supertest = require("supertest");
const { expect } = require("chai");
const app = require("./api");

describe("Index Page Tests", () => {
  it("should return status code 200", async () => {
    const response = await supertest(app).get("/");
    expect(response.statusCode).to.equal(200);
  });

  it("should return the correct message", async () => {
    const response = await supertest(app).get("/");
    expect(response.text).to.include("Welcome to the payment system");
  });
});
