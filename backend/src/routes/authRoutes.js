const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Simple test route
router.get('/test', (req, res) => {
  res.json({ message: 'Auth route working!' });
});

// Create user (temporary - for testing)
router.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = router;