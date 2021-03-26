const db = require('../database/models')

const STATUS_SUCCESS = 'success'
const STATUS_ERROR = 'error'
const STATUS_NOT_FOUND = 'not_found'

module.exports = {
    getProducts(req, res) {
        db.Product.findAll()
            .then(products => {
                res
                    .status(200)
                    .json({ 
                        meta: {
                            totalProducts: products.length
                        },
                        data: products,
                        status: STATUS_SUCCESS
                    })
            })
            .catch(error => {
                res
                    .status(500)
                    .json({
                        status: STATUS_ERROR,
                        error,
                    })
            })
        
    },
    getProduct(req, res) {
        const { id } = req.params

        db.Product.findByPk(id, {
            include: 'category'
        })
            .then(product => {
                
                if (!product) {
                    return res.status(404)
                    .json({
                        status: STATUS_NOT_FOUND
                    })
                    
                }

                res.status(200)
                    .json({
                        data: product,
                        status: STATUS_SUCCESS
                    })
            })
            .catch(error => {
                res
                    .status(500)
                    .json({
                        status: STATUS_ERROR,
                        error
                    })
            })
    },
    createProduct(req, res) {
        const body = req.body
        
        db.Product.create(body)
            .then(product => {
                res.status(201)
                    .json({
                        data: product,
                        status: STATUS_SUCCESS
                    })
            })
            .catch(error => {
                res
                    .status(500)
                    .json({
                        status: STATUS_ERROR,
                        error
                    })
            })
    },
    updateProduct(req, res) {
        const body = req.body

        db.Product.update(body, {
            where: {
                id: req.params.id
            }
        })
            .then(() => {

                db.Product.findByPk(req.params.id)
                    .then(product => {
                        res.status(201)
                            .json({
                                data: product,
                                status: STATUS_SUCCESS
                            })
                })

            })  
    },
    destroyProduct(req, res) {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.status(200)
                    .json({
                        status: STATUS_SUCCESS
                    })
            })
            .catch(error => {
                res
                    .status(500)
                    .json({
                        status: STATUS_ERROR,
                        error
                    })
            })
    }
}