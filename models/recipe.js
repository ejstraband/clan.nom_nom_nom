const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  family: {
    type: String
  },
  title: { 
    type: String, 
    required: true 
  },
  rating: { 
    type: Number, 
    required: false, 
    default: 0
  },
  prep_time: { 
    type: String, 
    required: false 
  },
  cook_time: { 
    type: String, 
    required: false 
  },
  difficulty: { 
    type: String, 
    required: false
  },
  source: { 
    type: String, 
    required: false 
  },
  author: { 
    type: String, 
    required: false 
  },
  poster: { 
    type: Number, 
    required: true, 
    default: 1 
  },
  servings: { 
    type: Number, 
    required: true, 
    default: 1
  },
  short_desc: { 
    type: String, 
    required: false 
  },
  categories: {  
    type: String, 
    required: false 
  },
  ingredients: {
    type: String,
    required: false
  },
  instructions: {
    type: String,
    required: false
  },
  story: {
    type: String,
    required: false
  },
  notes: {
    note: {
      author: { type: String },
      body: { type: String },
      date: { type: Date }
    }
  },
  image: "",
  date: { 
    type: Date, 
    default: Date.now 
  }
}, { _id: true });


const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
