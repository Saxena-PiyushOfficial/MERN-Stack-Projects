// router.js
const express = require('express');
const router = express.Router();

// Array to store products
let products = [
  {
    name: 'Laptop',
    price: 1200,
  },
];

// API to add a new product
router.post('/arr/post', (req, res) => {
  const newProduct = req.body;
  if (!newProduct || !newProduct.name || !newProduct.price) {
    return res.status(400).json({ error: 'Invalid product data' });
  }

  products.push(newProduct);
  res.status(201).json({ message: 'Product added successfully' });
});

// API to list all products
router.get('/arr', (req, res) => {
  res.status(200).json(products);
});

module.exports = router;
