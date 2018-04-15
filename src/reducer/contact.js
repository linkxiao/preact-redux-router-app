import { FETCH_USER, FETCH_USERFILLED, GET_ABOUTINFO, GET_LXINFO } from '../actionType';

// const initState = {
//     loading: true,
//     user: null,
//     initData: {
//           "name":"elieen",
//           "phone": "18618405059",
//           "email": "elieen@163.com"
//     }
// }

export const contact = {
    init: function(data) {
      console.log("contactDta:",data.contactData.name);
      return {
           loading: false,
           user: null,
           contact: {
             name: data.contactData.name,
             phone: data.contactData.phone,
             email: data.contactData.email
           }
       }
    },

    reducer:  (state = {}, action) => {
        //alert("reducer:action"+JSON.stringify(action));
        action.data = action.data ? action.data : {}
        switch (action.type) {
            case GET_LXINFO:
            state = Object.assign({},state, action.data);
            //     alert("contact:yes");
            //     return {
            //         loading: false,
            //         contact: action.data
            //     }

            default:
            state = Object.assign({},state, action.data)
                // alert("contact:noCase");
                // return {
                //     loading: false,
                //     contact: "state.initData"
                // }
        }
        return state;
    }
}
//module.exports = aboutReducer;
