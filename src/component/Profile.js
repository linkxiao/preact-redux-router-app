import { h, Component } from 'preact';
import { Link } from 'react-router-dom';
import { connect } from 'preact-redux';
import * as Actions from '../action/index';

class Profile extends Component {
    componentDidMount() {
        const accountId = this.props.match.params.accountId;
        this.props.fetchUser(accountId);
    }
    loadingMode = () => (
        <p>Loading...</p>
    )
    completeMode = (data) => (
        <div>
            <h2>Load successfully!</h2>
            <ul>
                <li>name: {data.name}</li>
                <li>url: {data.avatar_url}</li>
                <p><Link to="/">Back to Home</Link></p>
            </ul>
        </div>
    )
    render(state) {
        return state.profileReducer.loading ? this.loadingMode() : this.completeMode(state.profileReducer.user);
    }
}


//get当前的state(即：等同于store.getState());
const mapStateToProps = (state, ownProps) => {
   return state;
}


//dispatch当前action(fetchUser)
const mapDispatchToProps = (dispatch, ownProps) => (
    {
        fetchUser: (accountId) => dispatch(Actions.fetchUser(accountId))
    }
)

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
