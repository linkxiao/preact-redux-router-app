import { h } from 'preact';
import { Router } from 'preact-router';
import Home from './Home';
import Profile from './Profile';
import InputStateApp from './InputStateApp';
import SearchPage from './SearchPage';
import Error from './Error';

const App = () => (
    <div>
        <h1>Hello Preact.</h1>
        <Router>
            <Home path="/" />
            <SearchPage path="/search" />
            <Profile path="/profile/:accountId" />
            <InputStateApp path="/inputstateapp" />
            <Error default />
        </Router>
    </div>
);

module.exports = App;