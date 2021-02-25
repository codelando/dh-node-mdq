const { Product } = require('../database/models')

module.exports = {
    list(req, res) {
        Product.findAll({
            order: [
                ['price', 'DESC']
            ]
        })
            .then(products => res.render('product/list', { products }))
    },
    listOffers(req, res) {
        Product.findAll({
            where: {
                offer: true,
            }
        })
            .then(products => res.render('product/list', { products }))
    },
    detail(req, res) {
        Product.findByPk(req.params.id)
            .then(product => res.render('product/detail', { product }))
    }
}