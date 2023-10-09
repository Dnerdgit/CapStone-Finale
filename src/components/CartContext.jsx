import React, { Component } from 'react'
import { Combat } from '../Test.js/testrun2';

const ProductContext = React.createContext();

    class ProductProvider extends Component {
        state = {
            products: Combat,
            detailProduct: Combat
        }
       
        render() {
            return (
                <ProductContext.Provider value={{
                    ...this.state,
                }}>
                    {this.props.children}
                </ProductContext.Provider>
            )
        }

        
    }

    const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};