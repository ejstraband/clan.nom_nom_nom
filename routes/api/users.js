const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .post(userController.create)
  .get(userController.findAll);

// Matches with "/api/users/:id"
router
  .route("/:_id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

router
  .route("/:email")
  .get(userController.findByEmail)
  .put(userController.update)
  .delete(userController.remove);


// router.get('/', () => userController.findAll);
module.exports = router;