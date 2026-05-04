const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const Meter = require('../models/Meter');

router.post('/', protect, async (req, res) => {
  const { meterNumber, location, reading } = req.body;
  const meter = new Meter({
    user: req.user._id,
    meterNumber,
    location,
    reading
  });
  const createdMeter = await meter.save();
  res.status(201).json(createdMeter);
});

router.get('/', protect, async (req, res) => {
  const meters = await Meter.find({ user: req.user._id });
  res.json(meters);
});

module.exports = router;
