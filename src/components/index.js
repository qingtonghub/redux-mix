import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { BrowserRouter as Router,Link  } from 'react-router-dom'

import CounterWrap from './Counter'
import Todos from './Todos'
import Shopping from './ShopingCart'
import Async from './Async'
import RealWorld from './RealWorld'
import UserPage from './RealWorld/UserPage'
import RepoPage from './RealWorld/RepoPage'

const App = ({ store }) => (
    <Router>
        <React.Fragment>
            <ul>
                <li><Link to="/counter">CounterWrap</Link></li>
                <li><Link to="/todos">Todos</Link></li>
                <li><Link to="/shop">Shopping-cart</Link></li>
                <li><Link to="/async">Async</Link></li>
                <li><Link to="/realworld">RealWorld</Link></li>
            </ul>
            <Provider store={store}>
                <React.Fragment> 
                    <Route exact path="/" component={CounterWrap} />
                    <Route path="/counter" component={CounterWrap} />
                    <Route path="/todos" component={Todos} />
                    <Route path="/shop" component={Shopping} />
                    <Route path="/async" component={Async} />
                    <div className="box">
                        <h3>Real World</h3>
                        <Route path="/realworld" component={RealWorld} />   
                        <Route path="/realworld/:inputValue" component={UserPage} />
                        <Route path="/realworld/:login/:name" component={RepoPage} />
                    </div>
                </React.Fragment>
            </Provider>
        </React.Fragment>
    </Router>
)
App.propTypes = {
    store: PropTypes.object.isRequired,
}

export default App
































// import React from 'react'
// import PropTypes from 'prop-types'
// import { Route } from 'react-router-dom'
// import { Provider } from 'react-redux'

// import CounterWrap from './Counter'
// import Todos from './Todos'
// import Shopping from './ShopingCart'
// import Async from './Async'
// import RealWorld from './RealWorld'
// import UserPage from './RealWorld/UserPage'

// const App = ({ store }) => (
//     <Provider store={store}>
//         <React.Fragment> 
//             <Route exact path="/" component={CounterWrap} />
//             <Route path="/counter" component={CounterWrap} />
//             <Route path="/todos" component={Todos} />
//             <Route path="/shop" component={Shopping} />
//             <Route path="/async" component={Async} />
//             <Route path="/realworld" component={RealWorld} />   
//             <Route path="/realworld/:inputValue" component={UserPage} />   
//         </React.Fragment>
//     </Provider>
// )
// App.propTypes = {
//     store: PropTypes.object.isRequired,
// }

// export default App




 