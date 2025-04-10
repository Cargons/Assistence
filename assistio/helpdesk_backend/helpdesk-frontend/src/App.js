import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TicketList from './components/TicketList';
import CreateTicket from './components/CreateTicket';

const Dashboard = () => <div><h1>Dashboard</h1></div>;
const Clients = () => <div><h1>Clientes</h1></div>;
const Kanban = () => <div><h1>Kanban</h1></div>;

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/tickets" element={<TicketList />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/create" element={<CreateTicket />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
