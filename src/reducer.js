const initState = {
    loading: true,
    user: null
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return {
                loading: true,
                user: null
            }
        case 'FETCH_USERFILLED':
            return {
                loading: false,
                user: action.payload
            }
        default:
            return state;
    }
}

module.exports = reducer;