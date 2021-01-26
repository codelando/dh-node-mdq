// const users = require('../database/users');

module.exports = {
    index: (req, res) => {
        res.redirect('/users');
    },
    contact: (req, res) => {
        res.send('Estoy en la página de contacto');
    },
}