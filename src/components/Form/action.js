export function addUser(data) {
    return dispatch => {

        fetch(`http://localhost:3001/users?email=${data.email}`)
            .then(res => res.json())
            .then(res => {
                if (!res.length) {
                    console.log('data', data)
                    fetch(`http://localhost:3001/users`, {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        method: 'POST',
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                }
            });
        dispatch({
            type: 'NEW_USER',
            data: data
        })
    }
}