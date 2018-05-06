const router = require("express").Router();
const userSearch = require("./userSearch");
const recentRecipeSearch = require("./recentRecipeSearch");

router.use("/search/users/", userSearch);
router.use("/search/mostRecentRecipes", recentRecipeSearch);

module.exports = router;