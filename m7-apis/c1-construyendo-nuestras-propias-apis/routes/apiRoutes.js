const express = require('express');
const router = express.Router();
const controller = require('../controllers/apiController');

router.get('/products', controller.getProducts)
router.get('/products/:id', controller.getProduct)
router.post('/products', controller.createProduct)
router.patch('/products/:id', controller.updateProduct)
router.delete('/products/:id', controller.destroyProduct)


module.exports = router;