import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price,quantity,title }) => (
    <p>
        <span style={{marginRight: '10px'}}>{title} - &#36;{price}{quantity ? ` x ${quantity}件` : null}</span>
    </p>
)

Product.propTypes = {
    price: PropTypes.number,
    quantity: PropTypes.number,
    title: PropTypes.string,
}

export default Product