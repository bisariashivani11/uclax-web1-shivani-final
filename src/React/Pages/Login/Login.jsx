import React from 'react';

/* Components ---------------------------*/
import LoginForm from './LoginForm.jsx';
import MountainAndBeaches from './MountainAndBeaches.jsx';

const Login = () => {

    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
            <MountainAndBeaches />  
        </div>
    )
}

export default Login;