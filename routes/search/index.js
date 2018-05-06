const router = require("express").Router();
const userSearch = require("./userSearch");

router.use("/search", userSearch);

module.exports = router;