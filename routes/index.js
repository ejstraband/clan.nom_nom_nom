const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const apiUserRoutes = require("./api/users.js")
const apiNewRecipesRoutes = require("./api/newRecipes.js")

// API Routes
router.use("/api", apiRoutes);
router.use("/api/users", apiUserRoutes);
router.use("/api/newRecipes", apiNewRecipesRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;