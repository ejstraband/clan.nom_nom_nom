const router = require("express").Router();
const userRoutes = require("./users");
const recipeRoutes = require("./recipes");
const newRecipesRoutes = require("./newRecipes");

router.use("/users", userRoutes);
router.use("/recipes", recipeRoutes);
router.use("/newRecipes", newRecipesRoutes);

module.exports = router;