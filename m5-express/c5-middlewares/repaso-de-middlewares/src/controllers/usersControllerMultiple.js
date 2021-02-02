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
        user.images = [];

        if (req.files.length) {
            req.files.forEach(file => {
                user.images.push(file.filename);
            });
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

        if (req.file) {
            user.image = req.file.filename;
        }

        let userId = usersTable.create(user);

        res.redirect('/users/' + userId);
    },
    destroy: (req, res) => {
        let users = usersTable.all()

        let updatedUsers = users.filter(user => user.id != req.params.id);

        let usersJson = JSON.stringify(updatedUsers, null, ' ');
        fs.writeFileSync(jsonPath, usersJson);

        res.redirect('/users');
    }
}