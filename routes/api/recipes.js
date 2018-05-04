const router = require('express').Router();
const recipeController = require('../../controllers/recipeController');
const passport = require('passport');

// console.log("passport is: ", passport);

// "/api/recipes"
router.route('/')
  .get((req, res, next) => {console.log("User is authenticated ", req.isAuthenticated()); next()}, recipeController.findAll)
  .post(recipeController.create);
//

// "api/recipes/:id"
router
  .route('/:_id')
  .get(recipeController.findById)
  .put(recipeController.update)
  .delete(recipeController.remove);
//

module.exports = router;