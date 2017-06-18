import { h, Component }  from 'preact';
import linkState from 'linkstate';

class InputStateApp extends Component {
    submit = () => {
        console.log('submit value', this.state.text);
    }
    render(props, { text = '' }) {
        return(
            <div>
                <form action="javascript:" onSubmit={this.submit}>
                    <input type="text" value={text} onInput={linkState(this, 'text')} />
                </form>
                <pre><code>{JSON.stringify(this.state, null, 2)}</code></pre>
                <p><a href="/">Back to Home</a></p>
            </div>
        );
    }
}

module.exports = InputStateApp;