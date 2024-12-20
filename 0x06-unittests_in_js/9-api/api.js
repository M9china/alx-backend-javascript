const express = require("express");

const app = express();
const port = 7865;

// Route for GET /
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the payment system");
});

// Route for GET /cart/:id where :id must be a number
app.get("/cart/:id(\\d+)", (req, res) => {
  const cartId = req.params.id;
  res.status(200).send(`Payment methods for cart ${cartId}`);
});

// Catch-all route for 404 errors
app.use((req, res) => {
  res.status(404).send("Not found");
});

// Start the server
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
