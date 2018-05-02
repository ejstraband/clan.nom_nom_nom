const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

router.route("/:title")
  .get(recipeController.findByName);
//

module.exports = router;