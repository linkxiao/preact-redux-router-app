import { h, Component } from 'preact';
import { Link } from 'react-router-dom';

class Profile extends Component {
    componentDidMount() {
        const accountId = this.props.match.params.accountId;
        fetch(`https://api.github.com/users/${accountId}`)
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
        <p>Loading...</p>
    )
    completeMode = (user) => (
        <div>
            <h2>Load successfully!</h2>
            <ul>
                <li>name: {user.name}</li>
                <li>url: {user.avatar_url}</li>
                <p><Link to="/">Back to Home</Link></p>
            </ul>
        </div>
    )
    render(props, { loading = true, user = null }) {
        return loading ? this.loadingMode() : this.completeMode(user);
    }
}

module.exports = Profile;