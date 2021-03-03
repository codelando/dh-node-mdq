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
                'image/jpg': 'jpg',
                'image/jpeg': 'jpeg',
                'image/gif': 'gif',
                'image/webp': 'webp',
            }

            cb( null, `${uuid4()}.${EXTENSION[mimetype] || ''}` );
        }
    }
);

const upload = multer({ storage })

router.get('/', (req, res) => res.redirect('/dashboard/products'));

router.get('/login', controller.loginForm);
router.post('/login', controller.login);

router.get('/products', controller.productList);

router.get('/products/create',  controller.createProductForm);
router.post('/products/create',  upload.single('image'), controller.createProduct);

router.get('/products/:id',  controller.editProductForm);
router.put('/products/:id',  upload.single('image'), controller.editProduct);

router.delete('/products/:id',  controller.deleteProduct);

module.exports = router;