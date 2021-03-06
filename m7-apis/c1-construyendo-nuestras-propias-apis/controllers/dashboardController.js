const { Product } = require('../database/models')
const { Category } = require('../database/models')

module.exports = {
    productList(req, res) {
        Product.findAll()
            .then(products => {
                res.render('dashboard/product-list', { products })
            })
            .catch(err => console.log(err))
    },
    createProductForm(req, res) {
        Category.findAll()
            .then((categories) => res.render('dashboard/product-create', { categories }))
    },
    createProduct(req, res) {
        const { file } =  req
        const { name, category_id, price, order  } =  req.body

        Product.create({
            name,
            price, 
            order,
            category_id,
            image: file.filename,
        })
            .then(product => {
                res.redirect('/dashboard/products')
            })
    },
    editProductForm(req, res) {
        Promise.all([
            Category.findAll(), 
            Product.findOne({ 
                where: {
                    id: req.params.id
                },
            })
        ])
        .then(([categories, product]) => {
            res.render('dashboard/product-edit', { categories, product })
        })
    },
    editProduct(req, res) {
        const { file } =  req
        const { name, category_id, price, order  } =  req.body
        Product.findOne({ 
            where: { id: req.params.id },
        })
            .then((product) => {
                product.update({
                    name,
                    category_id,
                    price,
                    order,
                    image: file? file.filename : product.image,
                })
                    .then(() => {
                        res.redirect('/dashboard/products')
                    })
            })
    },
    deleteProduct(req, res) {
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