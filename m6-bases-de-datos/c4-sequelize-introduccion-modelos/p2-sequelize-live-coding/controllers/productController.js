const db = require('../database/models')
const { Op } = require("sequelize");

const product = {
    id: 1,
    name: 'test product',
    price: 1,
    image: '',
}

const products = [product, product, product]

const PRODUCTS_PER_PAGE = 1

module.exports = {
    list(req, res) {
        const page = (req.query.page || 1) - 1
        const productsPerPage = req.query.page_total || PRODUCTS_PER_PAGE
        
        db.Product.findAll({
            order: [
                ['order', 'ASC']
            ],
            limit: productsPerPage,
            offset: page * productsPerPage
        })
            .then(productList => {
                res.render('product/list', { products: productList })
            })
            .catch(() => {
                res.render('error')
            })
    },
    listOffers(req, res) {
        db.Product.findAll({
            where: {
                offer: true,
            }
        })
            .then(offerList => {
                res.render('product/list', { products: offerList })
            })
        
        
    },
    detail(req, res) {
        db.Product.findByPk(req.params.id)
            .then(productDetail => {

                if(!productDetail) {
                    /* no encontró el producto, entonces no tenemos
                    datos de producto a mostrar */
                    return res.render('product/not-found')
                }

                /* la base de datos funcionó correctamente 
                y el producto existe */
                res.render('product/detail', { product: productDetail })    
            })
            .catch(() => {
                // la base de datos falló por algún motivo
                res.render('error')
            })
            
    },
    lowPrice(req, res) {
        db.Product.findAll({
            where: {
                price: {
                    [Op.lte]: 1000
                }
            }
        })
            .then(lowerPrice => {
                res.render('product/list', { products: lowerPrice })
            })
            .catch(err => {
                console.log(err)
            })

        
    }
}