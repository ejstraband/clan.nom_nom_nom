const router = require('express').Router();
const sessionsController = require('../../controllers/sessionsController');

// router.route('/:email')
// .get(userController.findByEmail);

router.route('/new')
.post(sessionsController.new)

module.exports = router