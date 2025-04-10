import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🎧 Help Desk</div>
      <div className="navbar-right">
        <span className="navbar-user">Olá, Operador</span>
        <button className="navbar-btn">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
