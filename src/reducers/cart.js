
import {
    ADD_TO_CART,
    CHECKOUT_REQUEST,
    CHECKOUT_FAILURE
} from '../actions/ActiveTypes'

import { getProduct } from './products'

let initialState = {
    addedIds: [],     //存储product被添加时的id       [1,   2,    3]
    quantityById: {}  //存储每个productId被添加的个数 {1: 5,2: 0, 3: 1}
}

const addedIds = (state = initialState.addedIds,action) => {
    switch(action.type){
        case ADD_TO_CART: 
            if(state.indexOf(action.productId) !== -1){
                return state
            }
            return [...state,action.productId]
        default: 
            return state
    }
}
export const getAddedIds = state => state.addedIds

const quantityById = (state = initialState.quantityById,action) => {
    switch(action.type){
        case ADD_TO_CART:
            const { productId } = action
            return {
                ...state,
                [productId]: (state[productId] || 0) + 1
            }
        default:
            return state
    }
}
export const getQuantity = (state,productId) => state.quantityById[productId] || 0

const cart = (state = initialState,action) => {
    switch(action.type){
        case CHECKOUT_REQUEST: 
            return initialState
        case CHECKOUT_FAILURE: 
            return action.cart
        default:
            return {
                addedIds: addedIds(state.addedIds,action),
                quantityById: quantityById(state.quantityById,action)
            }
    }
}
export default cart


//获取购物车中的Products详细信息
export const getCartProducts = state => {
    return getAddedIds(state.cart).map(id => ({
        ...getProduct(state.products, id),
        quantity: getQuantity(state.cart, id)
    }))
}
//通过获取Product中price*购物车中数量 得到购物车中总价格
export const getTotal = state => {
    return getAddedIds(state.cart).reduce((total,id) => 
        total + getProduct(state.products,id).price * getQuantity(state.cart,id)
    ,0)
}