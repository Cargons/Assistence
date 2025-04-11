import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Help Desk</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tickets">Tickets</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/clients">Clientes</Link></li>
        <li><Link to="/clients/create">Registrar Cliente</Link></li>
        <li><Link to="/kanban">Kanban</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

