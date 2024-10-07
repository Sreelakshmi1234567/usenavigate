import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/Navigation');
    
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
       
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
        
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
