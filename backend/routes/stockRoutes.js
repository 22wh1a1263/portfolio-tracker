// routes/stockRoutes.js

const express = require('express');
const Stock = require('../models/Stock');

const router = express.Router();

// GET all stocks
router.get('/', async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new stock
router.post('/', async (req, res) => {
  const { name, ticker, quantity, buyPrice, currentPrice } = req.body;

  const stock = new Stock({
    name,
    ticker,
    quantity,
    buyPrice,
    currentPrice,
  });

  try {
    const newStock = await stock.save();
    res.status(201).json(newStock);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT (update) a stock by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedStock = await Stock.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedStock);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a stock by ID
router.delete('/:id', async (req, res) => {
  try {
    await Stock.findByIdAndDelete(req.params.id);
    res.json({ message: 'Stock deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
