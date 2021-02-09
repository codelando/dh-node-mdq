const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');
const path = require('path');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/img/users/'));
    },
    filename: (req, file, callback) => {
        console.log(file);
        // https://www.npmjs.com/package/uuidv4
        callback(null, 'user-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

router.get('/', controller.index);
router.get('/create', controller.create); // Muestra formulario de creación
router.get('/:id', controller.show);
router.post('/', upload.any(), controller.store); // Procesa el formulario de creación
router.get('/:id/edit', controller.edit);
router.put('/:id', upload.single('image'), controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;