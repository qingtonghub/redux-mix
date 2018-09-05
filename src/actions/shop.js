
import shop from '../api/shop'
import * as types from './ActiveTypes'


const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
})
export const getAllProducts = () => dispatch => {
    shop.getProducts(products => {
        dispatch(receiveProducts(products))
    })
}


const addToCartUnsafe = productId => ({
    type: types.ADD_TO_CART,
    productId
})
//getState() 是reduces里所有的state
export const addToCart = productId => (dispatch,getState) =>{
    if(getState().products.byId[productId].inventory > 0){
        dispatch(addToCartUnsafe(productId))
    }
}

export const checkout = products => (dispatch,getState) => {
    dispatch({ //清空购物车
        type: types.CHECKOUT_REQUEST
    })

    // const { cart } = getState();
    // shop.buyProducts(products, ()=>{
    //     console.log("OK");
    //     dispatch({
    //         type: types.CHECKOUT_SUCCESS,
    //         cart
    //     })
    // },1500)
}



