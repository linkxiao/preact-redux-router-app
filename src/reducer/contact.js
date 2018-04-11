import { FETCH_USER, FETCH_USERFILLED, GET_ABOUTINFO, GET_LXINFO } from '../actionType';

const initState = {
    loading: true,
    user: null,
    initData: {
          "name":"elieen",
          "phone": "18618405059",
          "email": "elieen@163.com"
    }
}
//export default function aboutReducer(state = initState, action) {
export const contactReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_LXINFO:
        alert("contact:yes");
            return {
                loading: false,
                contact: action.data
            }
        default:
            alert("contact:noCase");
            return {
                loading: false,
                contact: state.initData
            }

  }
}
//module.exports = aboutReducer;
