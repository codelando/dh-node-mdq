// Datos
const products = require('../database/products');

module.exports = {
    index: (req, res) => {
        res.send(products);
    },
    show: (req, res) => {
        // for(let i = 0; i < products.length; i++) {
        //     if (products[i].id === req.params.id) {
        //         return products[i];
        //     } else {
        //         return false;
        //     }
        // }
    
        let product = products.find(product => product.id == req.params.id);
    
        res.send(product);
    } 
};