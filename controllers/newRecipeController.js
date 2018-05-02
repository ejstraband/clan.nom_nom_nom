const db = require("../models");

// Defining methods for the NewRecipeController
module.exports ={
  findAll: function (req, res) {
    db.newRecipe
      .find(req.query)
      .sort({ date: -1 })
      .then(dbNewRecipe => res.json(dbNewRecipe))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.newRecipe
      .findById(req.params.id)
      .then(dbNewRecipe => res.json(dbNewRecipe))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log('creating Recipe!!!')
    const newRecipe = {
      // _id: req.body._id,
      title: req.body.title,
      rating: req.body.rating,
      prep_time: req.body.prep_time,
       cook_time: req.body.cook_time,
      difficulty: req.body.difficulty,
       source: req.body.source,
       author: req.body.author,
      servings: req.body.servings,
      short_desc: req.body.short_desc,
     catetories: req.body.categories,
       ingredients: req.body.ingredients,
      directions: req.body.directions,
      notes: req.body.notes,
    };
    console.log(newRecipe)
    db.newRecipe
      // .create(req.body)
      .create(newRecipe)
      .then(dbNewRecipe => res.json(dbNewRecipe))
      .catch(err => res.status(422).json(err));
  },
    update: (req, res) => {
    db.newRecipe
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbNewRecipe => res.json(dbNewRecipe))
      .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
    db.newRecipe
      .findById({ _id: req.params.id })
      .then(dbNewRecipe => dbNewRecipe.remove())
      .then(dbNewRecipe => res.json(dbNewRecipe))
      .catch(err => res.status(422).json(err));
    }
};
