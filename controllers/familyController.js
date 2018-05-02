const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.family
      .find(req.query)
      .sort({ date: -1 })
      .then(dbfamily => res.json(dbfamily))
      .catch(err => res.status(422).json(err));
  },
  findByName: function(req, res) {
    db.family      
      .findOne({"familyName": req.params.familyName})
      .then(dbfamily => {
        console.log(req.params.familyName);
        res.json(dbfamily);  
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.family
      .findOne({"_id": req.params._id})
      .then(dbfamily => res.json(dbfamily))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const family = {
      _id: req.body._id,
      familyName: req.body.familyName
    };
    db.family
      .create(family)
      .then(dbfamily => res.json(dbfamily))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.family
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbfamily => res.json(dbfamily))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.family
      .findById({ _id: req.params.id })
      .then(dbfamily => dbfamily.remove())
      .then(dbfamily => res.json(dbfamily))
      .catch(err => res.status(422).json(err));
  }
};