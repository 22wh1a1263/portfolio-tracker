const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // To load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());  // For parsing JSON requests
app.use(cors());  // Allow cross-origin requests

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Successfully connected to MongoDB'))
.catch((err) => console.log('Error connecting to MongoDB:', err));

// Models
const Stock = require('./models/Stock');  // Import the Stock model
const User = require('./models/User');    // Import the User model

// Routes for Stocks

// Add a new stock
app.post('/api/stocks', async (req, res) => {
  try {
    const newStock = new Stock({
      name: req.body.name,
      ticker: req.body.ticker,
      quantity: req.body.quantity,
      buyPrice: req.body.buyPrice,
    });

    await newStock.save();
    res.status(201).json(newStock);
  } catch (error) {
    res.status(400).json({ message: 'Error adding stock: ' + error.message });
  }
});

// Get all stocks
app.get('/api/stocks', async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.status(200).json(stocks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching stocks: ' + error.message });
  }
});

// Route for Users

// Register a new user
app.post('/api/users/register', async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,  // You should hash the password before saving it!
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: 'Error registering user: ' + error.message });
  }
});

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users: ' + error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
