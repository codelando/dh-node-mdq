const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/register', controller.register);

module.exports = router;