import React, { useState } from 'react';
import axios from 'axios';
import './CreateOperator.css';

const CreateOperator = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOperator = {
      name,
      email,
      birth_date: birthDate,
    };

    axios.post('http://localhost:8000/api/operators/', newOperator)
      .then(() => {
        setMessage('✅ Operador registrado com sucesso!');
        setName('');
        setEmail('');
        setBirthDate('');
      })
      .catch(() => {
        setMessage('❌ Erro ao registrar operador.');
      });
  };

  return (
    <div className="operator-form-container">
      <h2>Registrar Novo Operador</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} className="operator-form">
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
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />

        <button type="submit">Registrar Operador</button>
      </form>
    </div>
  );
};

export default CreateOperator;
