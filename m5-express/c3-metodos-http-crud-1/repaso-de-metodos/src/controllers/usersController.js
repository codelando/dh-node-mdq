const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '../database/users.json');

function readJson() {

    let users = fs.readFileSync(jsonPath, 'utf-8');
    users = JSON.parse(users);

    return users;
}

module.exports = {
    index: (req, res) => {
        let users = readJson();

        res.render('users/index', { 
            title: 'Listado de usuarios', 
            users       
        });
    },
    create: (req, res) => {
        res.render('users/create');
    },
    store: (req, res) => {
        let users = readJson();

        // Generamos el nuevo usuario
        let user = req.body;
        
        // Lo agregamos al listado
        users.push(user);

        // Lo guardamos en el json
        let usersJson = JSON.stringify(users, null, ' ');
        fs.writeFileSync(jsonPath, usersJson);
        
        res.send(req.body);
    },
    show: (req, res) => {
        let users = readJson();

        let user = users.find(user => user.id == req.params.id);

        if ( user ) {
            res.render('users/detail', { user });
        } else {
            res.send('No encontré el usuario');
        }
    },
    edit: (req, res) => {
        let users = readJson();

        let user = users.find(user => user.id == req.params.id);

        res.render('users/edit', { user });
    },
    update: (req, res) => {
        let users = readJson();

        let updatedUser = req.body;
        updatedUser.id = Number(req.params.id);

        let updatedUsers = users.map(user => {
            if (user.id == req.params.id) {
                return updatedUser;
            } else {
                return user;
            }
        });

        let usersJson = JSON.stringify(updatedUsers, null, ' ');
        fs.writeFileSync(jsonPath, usersJson);
        
        res.redirect('/users');
    },
    destroy: (req, res) => {
        let users = readJson();

        let updatedUsers = users.filter(user => user.id != req.params.id);

        let usersJson = JSON.stringify(updatedUsers, null, ' ');
        fs.writeFileSync(jsonPath, usersJson);

        res.redirect('/users');
    }
}