import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <p className="home-label">Crie o seu ticket</p>
      <button className="home-button" onClick={() => navigate('/create')}>
        <span className="home-plus">+</span>
      </button>
    </div>
  );
};

export default Home;
