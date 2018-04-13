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

let store = configureStore(window.__INITIAL_STATE__);

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
