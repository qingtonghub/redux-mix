import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import App from '../src/components'
import configureStore from './store/configureStore'
import '../src/assets/style.css'

const store = configureStore()

ReactDOM.render(
    <AppContainer>
        <App store={store} />
    </AppContainer>,
    document.getElementById('root')
)

if(process.env.NODE_ENV === 'development' && module.hot){
    module.hot.accept();
}





//版本四
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader'
// import { createStore,applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import rootReducer from './reducers'
// import api from './middleware/api'
// import App from '../src/components'

// import registerServiceWorker from './registerServiceWorker';
// import '../src/assets/style.css'

// const middleware = [thunk,api];
// const store = createStore(
//     rootReducer,
//     applyMiddleware(...middleware)
// )

// ReactDOM.render(
//     <AppContainer>
//         <App store={store} />
//     </AppContainer>,
//     document.getElementById('root')
// )


// if(process.env.NODE_ENV === 'development' && module.hot){
//     module.hot.accept();
//     module.hot.accept('./reducers', () => {
//         store.replaceReducer(rootReducer)
//     })
// }
// registerServiceWorker();







//版本三
// import React from 'react';
// import ReactDOM from 'react-dom';

// import { AppContainer } from 'react-hot-loader'
// import { BrowserRouter as Router,Link  } from 'react-router-dom'

// import configureStore from './store/configureStore'
// import { getAllProducts } from './actions/shop'
// import App from '../src/components'
// import registerServiceWorker from './registerServiceWorker';
// import '../src/assets/style.css'


// const store = configureStore();
// store.dispatch(getAllProducts())

// ReactDOM.render(
//     <AppContainer>
//         <Router>
//             <React.Fragment>
//                 <ul>
//                     <li><Link to="/counter">CounterWrap</Link></li>
//                     <li><Link to="/todos">Todos</Link></li>
//                     <li><Link to="/shop">Shopping-cart</Link></li>
//                     <li><Link to="/async">Async</Link></li>
//                     <li><Link to="/realworld">RealWorld</Link></li>
//                 </ul>
//                 <App store={store} />
//             </React.Fragment>
//         </Router>
//     </AppContainer>,
//     document.getElementById('root')
// )


// if(process.env.NODE_ENV === 'development' && module.hot){
//     module.hot.accept()
// }
// registerServiceWorker();









//版本一
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader'

// import { createStore } from 'redux'

// import Counter from '../src/components/Counter/Counter'
// import counter from '../src/reducers/index'
// import registerServiceWorker from './registerServiceWorker';

// import '../src/assets/style.css'


// const store = createStore(counter);
// const rootEl = document.getElementById('root');

// const render = () => ReactDOM.render(
//     <AppContainer>
//       <Counter value={store.getState()} 
//                onIncrement={() => {store.dispatch({type: 'INCREMENT'})}}
//                onDecrement={() => {store.dispatch({type: 'DECREMENT'})}} />
//     </AppContainer>,
//     rootEl
// )
// render()
// store.subscribe(render)

// if(process.env.NODE_ENV === 'development' && module.hot){
//     module.hot.accept()
// }
// registerServiceWorker();










