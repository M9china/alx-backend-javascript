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

  it("should return 200 when id is a number", async () => {
    let response = await supertest(app).get("/cart/12");
    expect(response.statusCode).to.equal(200);
  });

  it("should return 404 when id is not a number", async () => {
    const response = await supertest(app).get("/cart/twelve");
    expect(response.statusCode).to.equal(404);
  });

  it("should return 404 for mising cart id", async () => {
    const response = await supertest(app).get("/cart/");
    expect(response.statusCode).to.equal(404);
  });
});
