const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  duration: {
    type: Number,
    required: true,
    min: 1,
  },
  image: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Service", serviceSchema);
