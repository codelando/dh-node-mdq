const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');

router.get('/', controller.index);
router.get('/create', controller.create);
router.get('/:id', controller.show);
router.post('/', controller.store);
router.get('/:id/edit', controller.edit);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;