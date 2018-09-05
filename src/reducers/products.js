
import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../actions/ActiveTypes'

const products = (state, action) => {
    switch(action.type){
        case ADD_TO_CART: 
            return {
                ...state,
                inventory: state.inventory - 1
            }
        default: 
            return state
    }
}


/*
    'RECEIVE_PRODUCTS'返回
    {
        1: {id: 1, title: "iPad 4 Mini", price: 500.01, inventory: 2},
        2: {id: 2, title: "H&M T-Shirt White", price: 10.99, inventory: 10},
        3: {id: 3, title: "Charli XCX - Sucker CD", price: 19.99, inventory: 5}
    },
    default:
    默认通过productId获取某条数据  {id: 1, title: "iPad 4 Mini", price: 500.01, inventory: 2}
*/
const byId = (state = {},action) => {
    switch(action.type){
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                ...action.products.reduce((obj,product) => {
                    obj[product.id] = product
                    return obj
                },{})
            }
        default: 
            const { productId } = action;
            if(productId){
                return {
                    ...state,
                    [productId]: products(state[productId],action)
                }
            }
            return state
    }
}


/*
    'RECEIVE_PRODUCTS':
    存储products的productId的Array [ 1, 2, 3]
    default: []
*/
const visibleIds = (state = [], action) => {
    switch(action.type){
        case RECEIVE_PRODUCTS:
            return action.products.map(product => product.id)
        default:
            return state
    }
}

export default combineReducers({
    byId,
    visibleIds
})

const getProduct = (state, id) => state.byId[id]
const getVisibleProducts = state => state.visibleIds.map(id => getProduct(state,id))

export {
    getProduct,
    getVisibleProducts
}