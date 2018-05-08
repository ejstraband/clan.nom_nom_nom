const db = require("../models");
const bcrypt = require('bcryptjs');

module.exports = {
  findAll: function(req, res) {
    db.user
      .find(req.query)
      .sort({ date: -1 })
      .then(dbuser => res.json(dbuser))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.user
      .findOne({"_id": req.params._id})
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    // hash the password
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        // Store hash in your password DB.
        const user = {
          _id: req.body._id,
          family: req.body.family,
          email: req.body.email,
          name: req.body.name,
          password: hash,
          linkTo: req.body.linkTo,
          relationship: req.body.relationship,
          bio: req.body.bio,
          favorites: req.body.favorites,
          status: req.body.status
        };
        db.user
          .create(user)
          .then(dbuser => res.json(dbuser))
          .catch(err => res.status(422).json(err));
      });
    });
  },
  update: function(req, res) {
    console.log("req.body in update/userController is ", req.body)
    console.log("req.params_id in update/userController is ", req.params.id)
    db.user
      .findByIdAndUpdate( req.params._id,{$set: {favorites: req.body}})
      .then(dbuser => res.json(dbuser))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.user
      .findById({ _id: req.params.id })
      .then(dbuser => dbuser.remove())
      .then(dbuser => res.json(dbuser))
      .catch(err => res.status(422).json(err));
  }
};