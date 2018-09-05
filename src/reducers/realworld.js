
import * as types from '../actions/ActiveTypes'
import { merge } from 'lodash'
import { combineReducers } from 'redux'

import paginate from './paginate'

//更新entities缓存以响应具有response.entities的任何操作
const entities = (state = { 
    users: {}, 
    repos: {} 
}, action) => {
    if (action.response && action.response.entities) {
        return merge({}, state, action.response.entities)
    }
    return state
}

//更新fetch错误消息并提示
const errorMessage = (state='',action) => {
    const { type, error } = action;
    if (type === types.RESET_ERROR_MESSAGE) {
        return ''
    } else if (error) {
        return error
    }
    return state
}

const pagination = combineReducers({
    starredByUser: paginate({
        mapActionToKey: action => action.login,
        types: [
            types.STARRED_REQUEST,
            types.STARRED_SUCCESS,
            types.STARRED_FAILURE
        ],
    }),
    stargazersByRepo: paginate({
        mapActionToKey: action => action.fullName,
        types: [
            types.STARGAZERS_REQUEST,
            types.STARGAZERS_SUCCESS,
            types.STARGAZERS_FAILURE
        ],
    }),
})

const realWorld = combineReducers({
    entities,
    errorMessage,
    pagination
})

export default realWorld