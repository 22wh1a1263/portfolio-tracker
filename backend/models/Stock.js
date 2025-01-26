// models/Stock.js

const mongoose = require('mongoose');

// Define stock schema
const stockSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ticker: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  buyPrice: {
    type: Number,
    required: true,
  },
  currentPrice: {
    type: Number,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

// Create the stock model
const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
