
import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'


const ShoppingWrap = () => {
    return (
        <div className="box">
            <h3>Shopping Cart Example</h3>
            <ProductsContainer />
            <CartContainer />
        </div>
    )
}
 
export default ShoppingWrap;