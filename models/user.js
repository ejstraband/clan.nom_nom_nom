const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

// User Schema
const userSchema = new Schema({
  email: {
    type: String,
    index: true,
  },
  name: { 
    type: String, 
    required: true 
  },
  password: { 
    type: String, 
  },
  linkTo: {
    type: String
  },
  relationship: {
    type: String
  },
  bio: {
    type: String
  },
  status: {
    type: String
  },
  date: { type: Date, default: Date.now }
}, { _id: true });

const User = mongoose.model('User', userSchema);

module.exports = User;

