const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');
const usersTable = jsonTable('users');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');


module.exports = {
    login: (req, res) => {
        res.render('users/login');
    },
    authenticate: (req, res) => {
        // Validamos los datos del login
        let errors = validationResult(req);

        console.log(errors.mapped());

        // Si no hay errores
        if (errors.isEmpty()) {
            // Verifico que el usuario exista
            let user = usersTable.findByField('email', req.body.email);

            // Si el usuario existe
            if (user) {
                // La contraseña es la correcta
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    req.session.user = user;

                    return res.redirect('/users/' + user.id)

                // Si la contraseña es incorrecta
                } else {
                    let errors = {
                        password: {
                            msg: 'La contraseña es incorrecta',
                            param: 'email',
                            location: 'body'
                        }
                    }
                    return res.render('users/login', { errors: errors, old: req.body });
                }
            // Si el usuario no existe
            } else {
                let errors = {
                    email: {
                        msg: 'El email no existe en nuestros registros',
                        param: 'email',
                        location: 'body'
                    }
                }
                return res.render('users/login', { errors: errors, old: req.body });
            }
        // Si hay errores
        } else {
            // Renderizo el formulario nuevamente con los errors y los datos completados
            return res.render('users/login', { errors: errors.mapped(), old: req.body });
        }

    },
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    },
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
        // Valido los campos
        let errors = validationResult(req);

        // Me fijo si no hay errores
        if (errors.isEmpty()) {
            // Genero el nuevo usuario
            let user = req.body;
            user.password = bcrypt.hashSync(user.password);

            if (req.file) {
                user.image = req.file.filename;
            }

            let userId = usersTable.create(user);

            res.redirect('/users/' + userId);
        // Si hay errores
        } else {
            // Renderizo el formulario nuevamente con los errors y los datos completados
            return res.render('users/create', { errors: errors.mapped(), old: req.body });
        }
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