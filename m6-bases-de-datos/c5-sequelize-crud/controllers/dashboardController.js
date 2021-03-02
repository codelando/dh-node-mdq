const db = require('../database/models')
const bcrypt = require('bcryptjs');


module.exports = {
    loginForm(req, res) {
        res.render('dashboard/login', { error: '' })
    },
    login(req, res) {
        db.User.findOne({
            where: {
                user: req.body.user
            }
        })
            .then(user => {
                
                if(user) {
                    console.log(user)
                    if (bcrypt.compareSync(req.body.password, user.password)) { 
                        req.session.auth = true
                        return res.redirect('/dashboard/products') 
                    }
                }
                res.render('dashboard/login', { error: 'Usuario no encontrado' })
            })
            .catch(error => {

            })
        /* 
        cuando esté ok hacer lo siguiente:
        */

        
    },
    productList(req, res) {
        // enviar al template los productos
        db.Product.findAll()
            .then(products => {
                res.render('dashboard/product-list', { products })  
            })
            .catch(err => {
                res.render('dashboard/error')
            })
        
    },
    createProductForm(req, res) {
        db.Category.findAll()
        .then(categories => {
            res.render('dashboard/product-create', { categories })  
        })
        .catch(err => {
            res.render('dashboard/error')
        })

    },
    createProduct(req, res) {
        const { name, price, order, category_id } = req.body
        const { filename } = req.file

        db.Product.create({
            name, 
            price, 
            order, 
            category_id: Number(category_id),
            image: filename
        })
            .then(newProduct => {
                res.redirect('/dashboard/products')
            })
            .catch(error => {

            })

    },
    editProductForm(req, res) {
        const { id } = req.params
        
        /* db.Product.findByPk(id)
            .then(product => {
                if (product) {
                    db.Category.findAll()
                        .then(categories => {
                            res.render('dashboard/product-edit', { categories, product })
                        })
                }
            }) */
        
        Promise.all([
            db.Product.findByPk(id),
            db.Category.findAll()
        ])
            .then(promiseRes => {
                const product = promiseRes[0]
                const categories = promiseRes[1]

                if(product) {
                    res.render('dashboard/product-edit', { categories, product })
                }
                
            })
        
    },
    editProduct(req, res) {
        const { id } = req.params
        const { name, category_id, price, order  } =  req.body

        db.Product.findByPk(id)
            .then(product => {
                const originalImage = product.image

                db.Product.update({
                    name,
                    category_id,
                    price,
                    order,
                    image: req.file ? req.file.filename : originalImage
                }, {
                    where: {    
                        id
                    }
                })
                    .then(() => {
                        res.redirect('/dashboard/products')
                    })
                    .catch(err => console.log(err))
            })
        
        
    },
    deleteProduct(req, res) {
       const { id } = req.params
       db.Product.destroy({
           where: {
               id
           }
       })
        .then(() => {
            res.redirect('/dashboard/products')
        })
    }
    
}