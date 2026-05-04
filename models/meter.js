const mongoose = require('mongoose');

const meterSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  meterNumber: { type: String, required: true },
  location: { type: String, required: true },
  reading: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Meter', meterSchema);
