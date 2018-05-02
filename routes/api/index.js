const router = require("express").Router();
const recipeRoutes = require("./recipes");
const userRoutes = require("./users");
const emailRoute = require("./findByEmail");
const recipeByName = require("./recipeByName");

// API routes
router.use("/api/recipes", recipeRoutes);
router.use("/api/users", userRoutes);
router.use("/api/findByEmail", emailRoute);
router.use("/api/findByName", recipeByName);

module.exports = router;