const router = require('express').Router();
const userController = require('../../controllers/user_controller');

// "/api/users"
router.route('/register')
  .post(userController.create);

router.route('/login')
  .get(userController.findById);

// "/api/users/:id"
router
.route('/:id')
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);
//

module.exports = router;