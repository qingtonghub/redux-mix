
import React from 'react'
import PropTypes from 'prop-types'

import Product from './Product'

const ProductItem = ({ product,onAddToCartClicked }) => (
    <div style={{marginBottom: '10px'}}>
        <Product title={product.title} price={product.price} quantity={product.inventory}/>
        <button onClick={onAddToCartClicked}
                disabled={product.inventory>0?'':'disabled'}>{product.inventory>0?'添加到购物车':'卖光了'}</button>
    </div>
)

ProductItem.propTypes = {
    product: PropTypes.shape({
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired, //库存
        title: PropTypes.string.isRequired,
    }).isRequired,
    onAddToCartClicked: PropTypes.func.isRequired
}
 
export default ProductItem;