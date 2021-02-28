const express = require('express');
const multer = require('multer');
const uuid4 = require('uuid4')

const authMiddleware = require('../middlewares/auth')

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

router.get('/login', controller.loginForm);
router.post('/login', controller.login);

router.get('/products', authMiddleware, controller.productList);

router.get('/products/create', authMiddleware, controller.createProductForm);
router.post('/products/create', authMiddleware, upload.single('image'), controller.createProduct);

router.get('/products/:id', authMiddleware, controller.editProductForm);
router.put('/products/:id', authMiddleware, upload.single('image'), controller.editProduct);

router.delete('/products/:id', authMiddleware, controller.deleteProduct);

module.exports = router;