
import { combineReducers } from 'redux'
import * as types from '../actions/ActiveTypes'

const selectedSubreddit = (state = 'reactjs', action) => {
    switch(action.type){
        case types.SELECT_SUBREDDIT:
            return action.subreddit
        default: 
            return state
    }
}

const posts = (state={
    isFetching: false,       //是否在抓取数据
    didInvalidate: false,    //数据是否过时
    items: []
},action) => {
    switch(action.type){
        case types.INVALIDATE_SUBREDDIT:
            return {
                ...state,
                didInvalidate: true
            }
        case types.REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
        case types.RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt  //上一次更新时间
            }
        default: 
            return state
    }
}
const postsBySubreddit = (state={},action) => {
    switch(action.type){
        case types.INVALIDATE_SUBREDDIT:
        case types.RECEIVE_POSTS:
        case types.REQUEST_POSTS:
            return {
                ...state,
                [action.subreddit]: posts(state[action.subreddit], action)
            }
        default: 
            return state
    }
}
/*
postsBySubreddit: {
    frontend:{isFetching: false, didInvalidate: false, items: Array(25), lastUpdated: 1535012562030}
    reactjs:{isFetching: false, didInvalidate: false, items: Array(27), lastUpdated: 1535012518582}
}
selectedSubreddit: 'reactjs'    'frontend'
*/




const async = combineReducers({
    postsBySubreddit,
    selectedSubreddit
})
  
export default async 