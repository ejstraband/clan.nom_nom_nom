const db = require("../models");
const bcrypt = require('bcryptjs');

module.exports = {
  new: function(req, res) {
    db.user      
      .findOne({"email": req.body.email})
      .then(dbuser => {
        // hash the password
        bcrypt.compare(req.body.password, dbuser.password, function(err, result) {
          // res === true
          if (result){
            console.log(result);
            // passwords match
            res.send({
              status: 200,
              message: 'success',
              family: dbuser.family
            });                
          }
          else {
            // We are assigning status code 299 = 'password does not match'
            res.send({
              status: 299,
              message: 'password mismatch'
            }) 
          }
        });
      })
      .catch(err =>
        res.send({
          status: 422,
          message: 'user not found'
        })
    );
  }
};