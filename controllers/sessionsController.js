const db = require("../models");
const bcrypt = require('bcryptjs');

module.exports = {
  new: function(req, res) {
    console.log('sessionsController')
    console.log(req.body);
    db.user      
      .findOne({"email": req.body.email})
      .then(dbuser => {
        console.log(dbuser.password);
        console.log(req.body.password);
        bcrypt.compare(req.body.password, dbuser.password, function(err, result) {
          // res === true
          if (result){
            // passwords match
            res.send({
              status: 200,
              message: 'success'
            });                
          }
          else {
            // We are assigning status code 299 = 'passwords do not match'
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
          message: 'employee not found'
        })
        // res.status(422).json(err)
    );
  }
};