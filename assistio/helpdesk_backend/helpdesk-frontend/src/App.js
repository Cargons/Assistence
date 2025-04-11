import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import TicketList from './components/TicketList';
import CreateTicket from './components/CreateTicket';
import Home from './pages/Home';
import CreateClient from './pages/CreateClient';


const Dashboard = () => <h1>Dashboard</h1>;
const Clients = () => <h1>Clientes</h1>;
const Kanban = () => <h1>Kanban</h1>;
const Profile = () => <h1>Perfil do Operador</h1>;

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '250px', width: '100%' }}>
          <Navbar />
          <div style={{ padding: '80px 20px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tickets" element={<TicketList />} />
              <Route path="/create" element={<CreateTicket />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/clients/create" element={<CreateClient />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
