const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');
const usersTable = jsonTable('users');

module.exports = {
    index: (req, res) => {
        let users = usersTable.all()

        res.render('users/index', { 
            title: 'Listado de usuarios', 
            users       
        });
    },
    create: (req, res) => {
        res.render('users/create');
    },
    store: (req, res) => {
        // Generamos el nuevo usuario
        let user = req.body;

        if (req.file) {
            user.image = req.file.filename;
        } else {
            res.send('La imagen es obligatoria');
        }
        
        let userId = usersTable.create(user);
        
        res.redirect('/users/' + userId);
    },
    show: (req, res) => {
        let user = usersTable.find(req.params.id);

        if ( user ) {
            res.render('users/detail', { user });
        } else {
            res.send('No encontré el usuario');
        }
    },
    edit: (req, res) => {
        let user = usersTable.find(req.params.id);

        res.render('users/edit', { user });
    },
    update: (req, res) => {
        let user = req.body;
        user.id = Number(req.params.id);

        // Si viene una imagen nueva la guardo
        if (req.file) {
            user.image = req.file.filename;
        // Si no viene una imagen nueva, busco en base la que ya había
        } else {
            oldUser = usersTable.find(user.id);
            user.image = oldUser.image;
        }

        let userId = usersTable.update(user);

        res.redirect('/users/' + userId);
    },
    destroy: (req, res) => {
        let users = usersTable.all()

        usersTable.delete(req.params.id);

        res.redirect('/users');
    }
}