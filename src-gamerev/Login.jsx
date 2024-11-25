import React, { useState } from 'react';

export default function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleUserNameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            onLogin(true);
            setMessage('');
        } else {
            setMessage('Invalid credentials, please try again.');
        }
    };

    return (
        <div className="login-container">
            <h1>Welcome to Wormmmy's Reviews!</h1>
            <h4>Login to Continue:</h4>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={handleUserNameChange}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
            />
            <br />
            {message && <p className="error-message">{message}</p>}
            <button type="button" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}
