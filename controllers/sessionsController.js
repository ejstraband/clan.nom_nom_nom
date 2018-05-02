const db = require("../models");

module.exports = {
  new: function(req, res) {
    console.log(req.params);
    db.user      
      .findOne({"email": req.params.email})
      .then(dbuser => {
        console.log(req.params.email);
        res.json(dbuser);
        
      })
      .catch(err => res.status(422).json(err));
  }
};