const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

router.route("/")
  .get(recipeController.findMostRecent);
//

module.exports = router;