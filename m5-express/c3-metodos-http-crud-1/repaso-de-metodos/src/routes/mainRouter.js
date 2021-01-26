const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController');

router.get('/', controller.index);
router.get('/contacto', controller.contact);

module.exports = router;