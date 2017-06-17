import { h, Component } from 'preact';

class StatefulApp extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            user: null
        };
    }
    componentDidMount() {
        fetch(this.props.url)
            .then(response => response.json())
            .then(user => {
                this.setState({
                    user,
                    loading: false
                });
            })
            .catch(error => console.log(err));
    }
    loadingMode = () => (
        <div>Loading...</div>
    )
    completeMode = (user) => (
        <div>
            <h2>Load successfully!</h2>
            <ul>
                <li>name: {user.name}</li>
                <li>url: {user.avatar_url}</li>
            </ul>
        </div>
    )
    render(props, { loading, user }) {
        return loading ? this.loadingMode() : this.completeMode(user);
    }
}

module.exports = StatefulApp;