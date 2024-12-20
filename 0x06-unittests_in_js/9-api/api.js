const express = require("express");

const app = express();
const port = 7865;

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the payment system");
});

app.get("/cart/:id(\\d+)", (req, res) => {
  const cartId = req.params.id;
  res.status(200).send(`Payment methods for cart ${cartId}`);
});

app.use((req, res) => {
  res.status(404).send("Not found");
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
