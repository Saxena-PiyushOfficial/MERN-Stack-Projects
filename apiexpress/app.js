// app.js
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/router');

const app = express();
const PORT = 9090;

// Middleware to parse JSON in request body
app.use(bodyParser.json());

// Use the router for product-related routes
app.use('/products', router); // Use '/products' as the base path for the router

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
