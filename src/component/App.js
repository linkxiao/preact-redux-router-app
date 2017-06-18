import { h } from 'preact';
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import InputStateApp from './InputStateApp';
import SearchPage from './SearchPage';
import Error from './Error';

const App = () => (
    <div>
        <h1>Hello Preact.</h1>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/search" component={SearchPage} />
                <Route path="/profile/:accountId" component={Profile} />
                <Route path="/inputstateapp" component={InputStateApp} />
                <Route component={Error} />
            </Switch>
        </Router>
    </div>
);

module.exports = App;