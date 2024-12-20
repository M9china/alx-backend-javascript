const supertest = require("supertest");
const { expect } = require("chai");
const app = require("./api");

describe("API Endpoint Tests", () => {
  it("should return status code 200", async () => {
    const response = await supertest(app).get("/");
    expect(response.status).to.equal(200);
  });

  it('should return "Welcome to the payment system"', async () => {
    const response = await supertest(app).get("/");
    expect(response.text).to.equal("Welcome to the payment system");
  });

  it("should return 200 and correct message for a valid cart ID", async () => {
    const response = await supertest(app).get("/cart/12");
    expect(response.statusCode).to.equal(200);
  });

  it('should return "Payment methods for cart :id"', async () => {
    const response = await supertest(app).get("/cart/12");
    expect(response.text).to.equal("Payment methods for cart 12");
  });

  it("should return 404 when cart ID is not a number", async () => {
    const response = await supertest(app).get("/cart/twelve");
    expect(response.statusCode).to.equal(404);
  });

  it("should return 404 when the cart ID is missing", async () => {
    const response = await supertest(app).get("/cart/");
    expect(response.statusCode).to.equal(404);
  });
});
