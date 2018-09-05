
import * as types from './ActiveTypes'

export const requestPosts = subreddit => ({
    type: types.REQUEST_POSTS,
    subreddit
})

export const invalidateSubreddit = subreddit => ({
    type: types.INVALIDATE_SUBREDDIT,
    subreddit 
})

export const selectSubreddit = subreddit => ({
    type: types.SELECT_SUBREDDIT,
    subreddit
})

export const receivePosts = (subreddit, json) => ({
    type: types.RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
})

const fetchPosts = subreddit => dispatch => {
    dispatch(requestPosts(subreddit));
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
           .then(
               response => response.json(),
               error => console.log('An error occurred.', error)
            )
           .then(
                // 可以多次 dispatch！
                // 这里，使用 API 请求结果来更新应用的 state
               json => dispatch(receivePosts(subreddit, json))
            )
}

const shouldFetchPosts = (state,subreddit) => {
    const posts = state.postsBySubreddit[subreddit];
    //posts {isFetching: false, didInvalidate: false, items: Array(25), lastUpdated: 1535012562030}
    if(!posts){
        return true
    }
    if(posts.isFetching){
        return false
    }
    return posts.didInvalidate;
}

export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
    if(shouldFetchPosts(getState().async,subreddit)){
        return dispatch(fetchPosts(subreddit))
    }
}