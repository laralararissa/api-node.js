const express = require('express');
const router = express.Router();
const products = require('../../data/products');

// GET - Buscar todos os produtos
router.get('/products', (req, res) => {
  res.json(products);
});

// GET - Buscar produto pelo ID
router.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }
  
  res.json(product);
});

// GET - Buscar produtos por categoria
router.get('/products/category/:category', (req, res) => {
  const category = req.params.category;
  const filteredProducts = products.filter(p => 
    p.category.toLowerCase() === category.toLowerCase());
  
  res.json(filteredProducts);
});

module.exports = router;