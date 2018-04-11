import { h, Component } from 'preact';
import { Link } from 'react-router-dom';
import { connect } from 'preact-redux';
import { getLx } from '../action';

class Contact extends Component {
    componentDidMount() {
        //this.props.getLx();
    }
    loadingMode = () => (
        <p>Loading...</p>
    )
    completeMode = (data) => (
         <div>
            <h2>Load successfully!</h2>
            <ul>
                <li>title: {data.name}</li>
                <li>author: {data.email}</li>
                <p><Link to="/">Back to Home</Link></p>
                <p onClick = {this.props.getLx.bind(this)}>click me</p>
            </ul>
        </div>
    )
    render(state) {
        return state.contactReducer.loading ? this.loadingMode() : this.completeMode(state.contactReducer.contact);
    }
}

//const mapStateToProps = ({ loading, about }) => {
const mapStateToProps = (state, ownProps) => {
  alert("component:contact--:"+JSON.stringify(state));
   return state;
}

//dispatch当前action(fetchUser)
const mapDispatchToProps = (dispatch, ownProps) => (
    {
        getLx:function () {
            return dispatch(getLx());
        }
    }
)

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact);
