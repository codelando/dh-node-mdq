import React, { Component } from 'react'
import Categories from '../../components/categories/categories'
import LastProduct from '../../components/last-product/LastProduct'
import Stats from '../../components/stats/Stats'

const API = 'https://app.fakejson.com/q/ajQlPHqm?token=HKtpoATKM-YO295oYep71A'

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          categories: null,
          lastProduct: null,
          products: null,
          users: null,
        }
      }

    componentDidMount() {
        // acá le vamos a pegar a la api (SIEMPRE!)
        fetch(API)
          .then(res => res.json())
          .then(body => {
            // guardamos la data que viene de la API al state
            this.setState({
              categories: body.categories,
              products: body.products,
              lastProduct: body.lastProduct,
              users: body.users,
            })
          })
      }

    render() {
        const { lastProduct, categories, products } = this.state
        return (
            <>
                {/* chequeamos que el lastProduct no sea null (como al inicio) */}
                {lastProduct && (
                    <LastProduct 
                    image={lastProduct.image}
                    productName={lastProduct.productName}
                    productPrice={lastProduct.productPrice}
                    />)
                }
                {categories && <Categories categories={categories} />}

                {products && (
                    <>
                        <h2>Productos</h2>
                        <Stats label="Total productos" value={products.total} />
                        <Stats label="Total vendidos" value={products.totalSell} />
                    </>
                )}
            </>
        )
    }
}