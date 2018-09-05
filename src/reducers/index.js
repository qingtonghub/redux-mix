
import { combineReducers } from 'redux'
import counter from './counter'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import products from './products'
import cart from './cart'
import async from './async'
import realWorld from './realworld'

export default combineReducers({
    counter,
    todos,
    visibilityFilter,
    products,
    cart,
    async,
    realWorld
})




