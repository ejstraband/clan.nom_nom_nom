const router = require("express").Router();
const recipeRoutes = require("./recipes");
const userRoutes = require("./users");
const sessionRoutes = require("./session");

// API routes
router.use("/api/recipes", recipeRoutes);
router.use("/api/users", userRoutes);
router.use("/api/session", sessionRoutes);

module.exports = router;