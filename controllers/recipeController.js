const db = require("../models");

// Defining methods for the recipeController
module.exports = {
  findAll: (req, res) => {
    db.recipe
      .find(req.query)
      .sort({ date: -1 })
      .then(dbrecipe => res.json(dbrecipe))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.recipe
      .findOne({"_id": req.params._id})
      .then(dbrecipe => res.json(dbrecipe))
      .catch(err => res.status(422).json(err));
  },
  findByName: (req, res) => {
    db.recipe
      .findOne({"title": req.params.title})
      .then(dbrecipe => res.json(dbrecipe))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.recipe
      .create(req.body)
      .then(dbrecipe => res.json(dbrecipe))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    db.recipe
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbrecipe => res.json(dbrecipe))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.recipe
      .findById({ _id: req.params.id })
      .then(dbrecipe => dbrecipe.remove())
      .then(dbrecipe => res.json(dbrecipe))
      .catch(err => res.status(422).json(err));
  }
};