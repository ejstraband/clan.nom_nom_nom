const router = require('express').Router();
const recipeController = require('../../controllers/recipe_controller');

// "/api/recipes"
router.route('/')
  .get(recipeController.findAll)
  .post(recipeController.create);

// "api/recipes/:id"
router
  .route('/:id')
  .get(recipeController.findById)
  .put(recipeController.update)
  .delete(recipeController.remove);

module.exports = router;