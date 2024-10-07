import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    
    
    navigate('/Login');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
         
        />
        <br />
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
