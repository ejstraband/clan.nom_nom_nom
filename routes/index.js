const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const apiUserRoutes = require("./api/users.js");
const apiRecipeRoutes = require("./api/recipes");

// API Routes
router.use("/api", apiRoutes);
router.use("/api/users", apiUserRoutes);
router.use("/api/recipes", apiRecipeRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;