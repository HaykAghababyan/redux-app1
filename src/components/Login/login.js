import { Route, Redirect } from 'react-router-dom'
import React from 'react'
function Login({ component: Component, ...rest }) {
    return (<Route    {...rest} render={(props) => {
        if (localStorage.getItem('remember')) {
            const userName = JSON.parse(localStorage.getItem('remember')).userName;
            return <Redirect to={{ pathname: `/users/${userName}` }} />;
        }
        return <Component {...props} />;
    }
    } />)
}

export default Login;