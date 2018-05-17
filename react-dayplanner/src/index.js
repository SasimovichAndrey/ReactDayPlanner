import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer'
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

let store = configureStore(window.__INITIAL_STATE__);

configureOtherShit();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker(); // TODO: what is it?

function configureStore(initalState){
    let store = createStore(reducer, initalState, applyMiddleware(logger, thunkMiddleware));

    return store;
}

function configureOtherShit(){
    axios.interceptors.request.use((config) => {
        const authToken = localStorage.getItem('authToken');
        if (authToken && config.url != 'http://localhost:55334/token') {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      });
}
