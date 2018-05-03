const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
  family: {
    type: String
  },
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
  favorites: {
    recipes: []
  },
  status: {
    type: String
  },
  date: { type: Date, default: Date.now }
}, { _id: true });

const User = mongoose.model('User', userSchema);

module.exports = User;

