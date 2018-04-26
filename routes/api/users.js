const router = require('express').Router();
const userController = require('../../controllers/userController');

// "/api/users"
router.route('/')
  .get(userController.findAll)
  .post(userController.create);

// "/api/users/:id"
router
.route('/:id')
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);
//

module.exports = router;