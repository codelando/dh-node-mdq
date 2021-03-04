const express = require('express');
const multer = require('multer');
const uuid4 = require('uuid4')

const router = express.Router();

const controller = require('../controllers/dashboardController');

const storage = multer.diskStorage(
    {
        destination: 'public/images/',
        filename: function ( req, file, cb ) {
            const { mimetype } = file
            
            const EXTENSION = {
                'image/png': 'png',
                'image/jpeg': 'jpg',
                'image/jpeg': 'jpeg',
                'image/gif': 'gif',
            }

            cb( null, `${uuid4()}.${EXTENSION[mimetype] || ''}` );
        }
    }
);

const upload = multer({ storage })

router.get('/products', controller.productList);

router.get('/products/create', controller.createProductForm);
router.post('/products/create', upload.single('image'), controller.createProduct);

router.get('/products/:id', controller.editProductForm);
router.put('/products/:id', upload.single('image'), controller.editProduct);

router.delete('/products/:id', controller.deleteProduct);

module.exports = router;