
import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getVisibleProducts } from '../../reducers/products'
import ProductItem from './components/ProductItem'
import { addToCart,getAllProducts } from '../../actions/shop'

class ProductsContainer extends Component {
    componentDidMount(){
        const { getAllProducts } = this.props;
        getAllProducts();
    }
    render() { 
        const { products,addToCart } = this.props;
        return (
            <div className="pro-box bor">
                <h4>Products</h4>
                {products.map(product => 
                    <ProductItem key={product.id}
                                 product={product}
                                 onAddToCartClicked={()=>addToCart(product.id)} />
                )}
            </div>
        );
    }
}
 

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired
    })).isRequired,
    addToCart: PropTypes.func.isRequired
}

export default connect(
    state => ({
        products: getVisibleProducts(state.products)
    }),
    { addToCart, getAllProducts }
)(ProductsContainer);






/*
    state.products = {
        byId: {
            {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
            {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
            {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
        },
        visibleIds: [ 1, 2, 3]
    }
    通过 reducer products.js 中 getVisibleProducts处理后

    visibleIds.map(id => byId[id]))

    this.props.products:
    [
        {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
        {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
        {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
    ]
 */

 
