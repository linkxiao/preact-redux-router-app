import { FETCH_USER, FETCH_USERFILLED, GET_ABOUTINFO } from '../actionType';

const initState = {
    loading: true,
    user: null
}

export const profileReducer = (state = initState, action) => {
//export default function profileReducer(state = initState, action) {
    switch (action.type) {
        case FETCH_USER:
            return {
                loading: true,
                user: null
            }
        case FETCH_USERFILLED:
            return {
                loading: false,
                user: action.data
            }
        default:
            return state;
    }
}

//module.exports = profileReducer;
