const router = require('express').Router();
const familyController = require('../../controllers/familyController');

// "/api/families"
router.route('/')
  .get(familyController.findAll)
  .post(familyController.create);
//

// "api/familiess/:id"
router
  .route('/:_id')
  .get(familyController.findById)
  .put(familyController.update)
  .delete(familyController.remove);
//

module.exports = router;