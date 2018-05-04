const router = require("express").Router();
const familyController = require("../../controllers/familyController");

router.route("/:familyName")
  .get(familyController.findByName);
//

module.exports = router;