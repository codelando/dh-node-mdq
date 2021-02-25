const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.get('/', controller.list);
router.get('/offers', controller.listOffers);
router.get('/barats', controller.lowPrice);
router.get('/:id', controller.detail);

module.exports = router;