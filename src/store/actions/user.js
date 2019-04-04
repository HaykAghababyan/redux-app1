export function addUser(data) {
    return dispatch => {
        dispatch({
            type: 'ADD_USER',
            data: data
          })
    }
}