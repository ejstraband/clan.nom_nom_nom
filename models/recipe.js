const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  rating: { type: Number, required: false, default: 0},
  prep_time: { type: String, required: false },
  cook_time: { type: String, required: false },
  difficulty: { type: String, required: false, default: "easy" },
  source: { type: String, required: false },
  author: { type: String, required: false },
  poster: { type: Number, required: true, default: 1 },
  servings: { type: Number, required: false, default: 0 },
  short_desc: { type: String, required: false },
  categories: {  },
  ingredients: [{
    quantity: {type: Number},
    measure: {type: String},
    item: {type: String},  
  }],
  directions: [{
    direction: { note: { type: String } }
  }],
  notes: [{
    note: {
      author: { type: String },
      body: { type: String },
      date: { type: Date }
    }
  }],
  date: { type: Date, default: Date.now }
}, { _id: true });

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
