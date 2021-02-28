const { Product, Category, User } = require('../database/models')
const bcrypt = require('bcryptjs');


module.exports = {
    loginForm(req, res) {
        res.render('dashboard/login', { error: '' })
    },
    login(req, res) {
        User.findOne({
            where: {
                user: req.body.user,
            }
      })
        .then(user => {
            if (!user) {
                return res.render('dashboard/login', { error: 'Usuario no encontrado'})
            }
            if (bcrypt.compareSync(req.body.password, user.password)) {
                req.session.auth = true
                res.redirect('/dashboard/products')
                return
            }

            res.render('dashboard/login', { error: 'Usuario no encontrado' })
        })
    },
    productList(req, res) {
        Product.findAll({
        })
            .then(products => res.render('dashboard/product-list', { products }))
    },
    createProductForm(req, res) {
        Category.findAll()
            .then(categories => res.render('dashboard/product-create', { categories }))
    },
    createProduct(req, res) {
        const { file } =  req
        const { name, category_id, price, order  } =  req.body

        Product.create({
            name,
            category_id, 
            price, 
            order,
            image: file.filename
        })
            .then(() => res.redirect('/dashboard/products'))
        
        
    },
    editProductForm(req, res) {
        Promise.all([
            Category.findAll(), 
            Product.findOne({ 
                where: {
                    id: req.params.id
                }
                }
            )])
        .then(([categories, product]) => {
            res.render('dashboard/product-edit', { categories, product })
        })
    },
    editProduct(req, res) {
        
        const { file } =  req
        const { name, category_id, price, order  } =  req.body
        
        Product.findOne({ where: { id: req.params.id } })
            .then(product => {
                product.update({
                    name,
                    category_id,
                    price,
                    order,
                    image: file? file.filename : product.image
                })
                    .then(() => {
                        res.redirect('/dashboard/products')
                    })
            })
    },
    deleteProduct(req, res) {
        console.log('deleteProduct')
        Product.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.redirect('/dashboard/products')
            })
        
    }
    
}