import { h, Component } from 'preact';

class Profile extends Component {
    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.accountId}`)
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
                <p><a href="/">Back to Home</a></p>
            </ul>
        </div>
    )
    render(props, { loading = true, user = null }) {
        return loading ? this.loadingMode() : this.completeMode(user);
    }
}

module.exports = Profile;