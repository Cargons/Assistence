import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Arquivo de estilos

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Help Desk</h2>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/tickets" activeClassName="active-link">
            Tickets
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" activeClassName="active-link">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/clients" activeClassName="active-link">
            Clientes
          </NavLink>
        </li>
        <li>
          <NavLink to="/kanban" activeClassName="active-link">
            Kanban
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
