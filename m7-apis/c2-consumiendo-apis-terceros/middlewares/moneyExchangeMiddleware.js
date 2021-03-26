const fetch = require('node-fetch')

const API_EXCHANGE_URL = 'https://www.doladsrsi.com/api/api.php?type=valoresprincipales'

module.exports = async (req, res, next) => {
    try {
        const apiResponse = await fetch(API_EXCHANGE_URL)
        const exchange = await apiResponse.json()

        const oficial = exchange.find(change => 
            change.casa.nombre === 'Dolar Oficial')

        const blue = exchange.find(change => 
            change.casa.nombre === 'Dolar Blue')
        
        const turista = exchange.find(change => 
            change.casa.nombre === 'Dolar turista')
        
        res.locals.exchange = {
            oficial: oficial ? oficial.casa.venta : 'N/A',
            blue: blue ? blue.casa.venta : 'N/A',
            turista: turista ? turista.casa.venta : 'N/A',
        }
    } catch(err) {
        console.log('API DOLAR SI NO FUNCIONO')
    }


    next()
}

