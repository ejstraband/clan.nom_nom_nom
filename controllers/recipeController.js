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
  findMostRecent: (req, res) => {
    db.recipe
      .find().sort('-date').limit(5)
      .then(dbrecipe => res.json(dbrecipe))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log('creating Recipe!!!')
    const newRecipe = {
      // _id: req.body._id,
      family: req.body.family,
      title: req.body.title,
      rating: req.body.rating,
      prep_time: req.body.prep_time,
      cook_time: req.body.cook_time,
      difficulty: req.body.difficulty,
      source: req.body.source,
      author: req.body.author,
      poster: req.body.poster,
      servings: req.body.servings,
      short_desc: req.body.short_desc,
      catetories: req.body.categories,
      ingredients: req.body.ingredients,
      directions: req.body.directions,
      story: req.body.story,
      notes: req.body.notes,
      image: req.body.image,
    };
    console.log('Your recipe object: ' + newRecipe);
    db.recipe
      // .create(req.body)
      .create(newRecipe) //cannot "read" create property error found.
      .then(dbRecipe =>{
        console.log('just got past creation.');
        res.json(dbRecipe)
      })
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