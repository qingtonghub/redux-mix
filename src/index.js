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

