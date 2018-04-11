import { FETCH_USER, FETCH_USERFILLED } from '../actionType';

const initState = {
    loading: true,
    title: null
}

const reducer = (state = initState, action) => {
    switch (action.type) {
      case SET_STATE:
           return {
              loading: true,
              title: null
           }

      case SET_ACTIVEHEAD:
           return {
                loading: false,
                title: action.activeHead
           }

      case SET_ACTIVECONTENT:
           return {
                loading: false,
                content: action.activeContent
           }

      default:
           return state;
    }
}

module.exports = reducer;
