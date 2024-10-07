import React from 'react';
import './Navi.css'
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    console.log('Logged out');
    navigate('/Login');
  };

  return (
    <div className='nav'>
      <h2>Navigation</h2>
      
      <ul>
        <li><button onClick={() => navigate('/contact')}>Contact Us</button></li>
        <li><button onClick={() => navigate('/about')}>About</button></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
      
    </div>
  );
}

export default Navigation;
