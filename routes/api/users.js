const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .post(userController.create)
  .get(userController.findAll);

// Matches with "/api/users/:email"
router
  .route("/:email")
  .get(userController.findByEmail)
  .delete(userController.remove);
  
  router.route("/ancestor")
  .get(userController.findAll)
  .post(userController.create)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;