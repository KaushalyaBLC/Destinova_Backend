const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  telNo: {
    type: String,
    required: true,
  },
  bDay: {
    type: Date,
  },
  education: {
    type: String,
  },
  ip: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("Customers", customerSchema);

module.exports = User;
