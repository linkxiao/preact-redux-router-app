import { h, render } from 'preact';
import { Provider } from 'preact-redux';

import store from './store';
const rootElement = document.getElementById('app');

const renderApp = (element) => {
    const App = require('./app');
    render(
        <Provider store={store}>
            <App />
        </Provider>, 
        element
    );
};

renderApp(rootElement);

// module.hot && module.hot.accept(
//     './app.js',
//     () => renderApp(rootElement)
// )