const router = require("express").Router();
const recipeRoutes = require("./recipes");
const userRoutes = require("./users");
const sessionRoutes = require("./session");
const recipeByName = require("./recipeByName");
const familyRoutes = require("./families");
const familyByName = require("./familyByName");

// API routes
router.use("/api/recipes", recipeRoutes);
router.use("/api/users", userRoutes);
router.use("/api/session", sessionRoutes);
router.use("/api/findByName", recipeByName);
router.use("/api/families", familyRoutes);
router.use("/api/familyByName", familyByName);

module.exports = router;