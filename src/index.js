import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import 'preact/devtools';

import store from './store';

let root;
const renderApp = () => {
    const App = require('./component/app');
    root = render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.body,
        root
    );
};

renderApp(false);

module.hot && module.hot.accept(
    './component/app.js',
    renderApp
)