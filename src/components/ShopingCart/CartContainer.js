
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Cart from './Cart'

// import { getTotal,getCartProducts } from '../../reducers'
import { getTotal,getCartProducts } from '../../reducers/cart'
import { checkout } from '../../actions/shop'


const CartContainer = ({ products,total,checkout }) =>{
    return (
        <div className="pro-box">
            <h4>Your Cart</h4>
            <Cart products={products}
                  total={total}
                  onCheckoutClicked={()=>checkout(products)}/>
        </div> 
    )
} 

CartContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired, //库存
        quantity: PropTypes.number.isRequired, //添加进购物车的数量
        title: PropTypes.string.isRequired,
    })).isRequired,
    total: PropTypes.number.isRequired,
    checkout: PropTypes.func.isRequired
}

 
export default connect(
    state => ({
        products: getCartProducts(state),
        total: getTotal(state),
    }),
    {
        checkout
    }
)(CartContainer);