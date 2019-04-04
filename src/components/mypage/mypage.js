import React from 'react'
import { NavLink } from 'react-router-dom'

function MyPage({ match }) {

    const handleLogout = () => {

        localStorage.removeItem('remember');
    }
    return (<div>
        <NavLink onClick={handleLogout} to='/'>Logout</NavLink>
        <h1>HELLO {match.params.userName}</h1>
    </div>

    )
}

export default MyPage;