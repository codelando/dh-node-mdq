const { Product, Category } = require('../database/models')


module.exports = {
    list(req, res) {
        Product.findAll({
            order: [
                ['price', 'DESC']
            ],
        })
        .then(products => {
            res.render('product/list', { products })
        })
    },
    detail(req, res) {
        Product.findByPk(req.params.id, {
            include: ['category', 'tags']
        })
        .then(product => {
            res.render('product/detail', { product })
        })
    },
}