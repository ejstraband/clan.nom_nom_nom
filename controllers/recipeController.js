const db = require("../models");

// Defining methods for the RecipeController
const recipeController = {
  findAll: (req, res) => {
    db.Recipe
      .find(req.query)
      .sort({ date: -1 })
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.Recipe
      .findById(req.params.id)
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.Recipe
      .create(req.body)
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    db.Recipe
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.Recipe
      .findById({ _id: req.params.id })
      .then(dbRecipe => dbRecipe.remove())
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
  }
};

module.exports = recipeController;