const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  prep_time: {
    type: String,
    required: false
  },
  cook_time: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true,
    min: 2
  }
  posted_by: {
    type: String,
    required: true
  },
  serving_size: {
    type: Number,
    required
  }
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;