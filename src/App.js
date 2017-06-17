import { h } from 'preact';
import StatefulApp from './StatefulApp';
import InputStateApp from './InputStateApp';
const App = () => (
    <div>
        <h1>Hello Preact!!!!!</h1>
        <StatefulApp url="https://api.github.com/users/mvpdw06" />
        <InputStateApp />
    </div>
);

module.exports = App;