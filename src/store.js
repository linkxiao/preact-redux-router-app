import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

module.hot && module.hot.accept(
    './reducer.js', 
    () => {
        const nextReducer = require('./reducer');
        store.replaceReducer(nextReducer);
    }
);

module.exports = store;