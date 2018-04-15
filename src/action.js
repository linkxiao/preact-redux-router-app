/**
 * @file The file of action for dispatch
 * @author linkxiao(linkxiao@icloud.com)
 * @dete 2018/03/20
 */



import { FETCH_USER, FETCH_USERFILLED, GET_ABOUTINFO, GET_LXINFO} from './actionType';

const action = {
     fetchUser: (accountId) => (dispatch) => {
        dispatch({ type: FETCH_USER });
        fetch(`https://api.github.com/users/${accountId}`)
            .then(response => response.json())
            .then((user) => {
                dispatch({
                    type: FETCH_USERFILLED,
                    data: user
                })
            })
            .catch(error => console.log(error));
     },

     getAbout:() => (dispatch) => {
          let about = {
              title:"朝韩定于4月27日举行领导人会晤,中方回应",
              star:"4.5",
              author:"linkxiao222"
          }
          dispatch({
              type: GET_ABOUTINFO,
              data: about
          })
      },

      //getLx:() => (dispatch) => {
      getLx:(dispatch) => (data) => {
           console.log("getLx:action",data);
           let preData = {
                   loading: false,
                   user: null,
                   contact: {
                      "name":"opopop",
                      "phone": "17701321596",
                      "email": "elieen@163.com"
                   }
              }
           data = data ? data:preData;
           dispatch({
              type: GET_LXINFO,
              data: preData
          });
           // dispatch({
           //     type: GET_LXINFO,
           //     data: contact
           // })
      }
}

module.exports = action;
