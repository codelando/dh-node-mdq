const { check } = require('express-validator');

module.exports = {
    register: [
        // Usamos el name del campo
        check('first_name')
            .notEmpty().withMessage('Debes completar el nombre')
            .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres')
            .isLength({ max: 20 }).withMessage('El nombre debe tener menos de 20 caracteres'),
        check('last_name').notEmpty().withMessage('Debes completar el apellido'),
        check('email').isEmail().withMessage('Debes completar un email valido')
    ],
    update: [
        // Validamos el login
        check('first_name')
            .notEmpty().withMessage('Debes completar el nombre')
            .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres')
            .isLength({ max: 20 }).withMessage('El nombre debe tener menos de 20 caracteres'),
        check('last_name').notEmpty().withMessage('Debes completar el apellido'),
        check('email').isEmail().withMessage('Debes completar un email valido')
    ]
}