const router = require('express').Router();
const newRecipeController = require('../../controllers/newRecipeController');

// "/api/newRecipes"
router.route('/')
  .get(newRecipeController.findAll) 
  .post(newRecipeController.create);

// "api/newRecipes/:id"
router
  .route('/:id')
  .get(newRecipeController.findById)
  .put(newRecipeController.update)
  .delete(newRecipeController.remove);

module.exports = router;