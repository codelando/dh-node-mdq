const { request } = require("express");

// const users = require('../database/users');

module.exports = {
    index: (req, res) => {
        res.render('index', { 
            title: 'Listado de usuarios', 
            users : [
                { first_name: 'Juan' } , { first_name: 'María' }
            ]
        });
    },
    detail: (req, res) => {
        res.render('detail');
    },
    contact: (req, res) => {
        res.send('Estoy en la página de contacto');
    },
}