const router = require("express").Router();
const userRoutes = require("./users");
const recipeRoutes = require("./recipes");

router.use("/users", userRoutes);
router.use("/recipes", recipeRoutes);

module.exports = router;