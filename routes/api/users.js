const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .post(userController.create)
  .get(userController.findAll);
//

// Find and create user ancestors
router.route("/ancestors")
  .get(userController.findAll)
  .post(userController.create);
// 

// And by ID
router.route("/ancestors/:_id")
  .get(userController.findById)
  .delete(userController.remove);

// Matches with "/api/users/:id"
router
  .route("/:_id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);
//

module.exports = router;