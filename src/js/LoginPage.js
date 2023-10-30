import React, { useState } from 'react';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here, such as sending a request to a server or using mock data.

    // For demonstration purposes, we'll use a simple hardcoded check.
    if (username === 'user1' && password === 'password1') {
      // Successfully logged in; call the callback function to set isLoggedIn to true.
      onLogin(true);
    } else {
      // Handle login failure.
      console.log('Login failed!');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
