import { h, render } from 'preact';

const rootElement = document.getElementById('app');

const renderApp = (element) => {
    const App = require('./app');
    render(
        <App />, 
        element
    );
};

renderApp(rootElement);

// module.hot && module.hot.accept(
//     './app.js',
//     () => renderApp(rootElement)
// )