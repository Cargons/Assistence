import React, { useState } from 'react';
import axios from 'axios';
import './CreateClient.css';

const CreateClient = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newClient = {
      name,
      email,
      birth_date: birthDate,
    };

    axios.post('http://localhost:8000/api/clients/', newClient)
      .then(() => {
        setMessage('✅ Cliente registrado com sucesso!');
        setName('');
        setEmail('');
        setBirthDate('');
      })
      .catch(() => {
        setMessage('❌ Erro ao registrar cliente.');
      });
  };

  return (
    <div className="client-form-container">
      <h2>Registrar Novo Cliente</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} className="client-form">
        <input
          type="text"
          placeholder="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="date"
          placeholder="Data de nascimento"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />

        <button type="submit">Registrar Cliente</button>
      </form>
    </div>
  );
};

export default CreateClient;
