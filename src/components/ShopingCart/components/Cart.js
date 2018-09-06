import React from 'react';
import PropTypes from 'prop-types'

import Product from './Product';

const Cart = ({ products,total,onCheckoutClicked }) => {
    const hasProducts = products.length;
    const nodes = hasProducts?(
        products.map(product => 
            <Product title={product.title}
                     price={product.price}
                     quantity={product.quantity}
                     key={product.id}/>
        )
    ):(
        <em>please add some products</em>
    )
    return (
        <div>
            {nodes}
            <p style={{marginTop: '10px'}}>Total: &#36;{total}</p>
            <button onClick={onCheckoutClicked}
                    disabled={hasProducts?'':'disabled'}>checkout</button>
        </div>
    )
}
Cart.propTypes = {
    products: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    onCheckoutClicked: PropTypes.func.isRequired
}
export default Cart;