const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');
const path = require('path');
const validate = require('../validations/usersValidations') 

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/img/users/'));
    },
    filename: (req, file, callback) => {
        // Mejor usar algo como esto en lugar de Date.now()
        // https://www.npmjs.com/package/uuidv4
        callback(null, 'user-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

router.get('/', controller.index);

// Muestro form de login
router.get('/login', controller.login);
// Proceso form de login
router.post('/login', validate.login, controller.authenticate);
router.get('/logout', controller.logout);

router.get('/create', controller.create); // Muestra formulario de creación
router.get('/:id', controller.show);
router.post('/', upload.single('image'), validate.register, controller.store); // Procesa el formulario de creación
router.get('/:id/edit', controller.edit);
router.put('/:id', upload.single('image'), validate.update, controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;