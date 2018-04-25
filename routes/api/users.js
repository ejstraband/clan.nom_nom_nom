const router = require('express').Router();
const userController = require('../../controllers/userController');
console.log("users.js is here: ", userController);

// "/api/users"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// "/api/users/:id"
router.route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);
//

module.exports = router;