const action = {
    fetchUser: (accountId) => (dispatch) => {
        dispatch({ type: 'FETCH_USER' });

        fetch(`https://api.github.com/users/${accountId}`)
            .then(response => response.json())
            .then((user) => {
                dispatch({
                    type: 'FETCH_USERFILLED',
                    payload: user
                })
            })
            .catch(error => console.log(err));
    }
}

module.exports = action;