import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import api from '../middleware/api'
import rootReducer from '../reducers'
// import DevTools from '../containers/DevTools'


const configureStore = preloadedState => {
    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk,api,createLogger())
    )

    if(process.env.NODE_ENV === 'development' && module.hot){
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer)
        })
    }
    return store
}

export default configureStore