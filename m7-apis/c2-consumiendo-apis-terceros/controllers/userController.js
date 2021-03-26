
const fetch = require('node-fetch')

module.exports = {
    /* register(req, res) {
        
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(countries => {
                
                

                s
                const nameCountries = []

                countries.forEach(country => {
                    nameCountries.push(country.name)
                })

                res.render('user/register', { countries: nameCountries })
            }) 
            
        
    }*/

    async register(req, res) {
        // API
        try {
            const response = await fetch('https://restcountries.eu/rest/v2/all')
            const countries = await response.json()
            
            const nameCountries = []

            countries.forEach(country => {
                nameCountries.push(country.name)
            })

            res.render('user/register', { countries: nameCountries })
        } catch(err) {
            console.log(err)
            res.render('error')
        }
        
    }
}   
