import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logout');
    navigate('/'); // Redirecionar após logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">🎧 Help Desk</div>

      <div 
        className="navbar-profile-wrapper"
        onMouseEnter={() => setDropdownVisible(true)}
        onMouseLeave={() => setDropdownVisible(false)}
      >
        <img
          src="https://i.pravatar.cc/300" 
          alt="Perfil"
          className="navbar-avatar"
        />
        {isDropdownVisible && (
          <div className="navbar-dropdown">
            <button onClick={() => navigate('/profile')}>Perfil</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
