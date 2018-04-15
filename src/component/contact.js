import { h, Component } from 'preact';
import { Link } from 'react-router-dom';
import { connect } from 'preact-redux';
import * as Actions from '../action';

class Contact extends Component {
    componentDidMount() {
        //this.props.getLx();
        alert("this.props"+JSON.stringify(this.props));
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
        return state.contactData.loading ? this.loadingMode() : this.completeMode(state.contactData.contact);
    }
}

//const mapStateToProps = ({ loading, about }) => {
const mapStateToProps = (state, ownProps) => {
  console.log("state.contactData.contact:",state.contactData.contact);
  //alert("component:contact--:"+JSON.stringify(state));
   return state;
}

//dispatch当前action(fetchUser)
const mapDispatchToProps = (dispatch, ownProps) => (
    {
        getLx:Actions.getLx(dispatch),
    }
    // {
    //     getLx:function () {
    //         return dispatch(getLx());
    //     }
    // }
)

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact);
