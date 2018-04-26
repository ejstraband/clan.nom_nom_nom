const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  name: { 
    type: String, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  date: { type: Date, default: Date.now }
}, { _id: true });

const User = mongoose.model('User', userSchema);

module.exports = User;


