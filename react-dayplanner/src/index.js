import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer'
import { createStore} from 'redux'
import { Provider } from 'react-redux'

let store = configureStore(window.__INITIAL_STATE__);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

function configureStore(initalState){
    let store = createStore(reducer, initalState);

    return store;
}
