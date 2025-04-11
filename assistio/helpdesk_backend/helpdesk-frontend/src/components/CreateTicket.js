import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CreateTicket.css';

const CreateTicket = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [clientId, setClientId] = useState('');
  const [operatorId, setOperatorId] = useState('');
  const [clients, setClients] = useState([]);
  const [operators, setOperators] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Buscar clientes e operadores
    axios.get('http://localhost:8000/api/clients/')
      .then(res => setClients(res.data))
      .catch(err => console.error(err));

    axios.get('http://localhost:8000/api/operators/')
      .then(res => setOperators(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = {
      title,
      description,
      client: clientId,
      operator: operatorId,
      status: 'Pendente'
    };

    axios.post('http://localhost:8000/api/tickets/', newTicket)
      .then(res => {
        setMessage('✅ Ticket criado com sucesso!');
        setTitle('');
        setDescription('');
        setClientId('');
        setOperatorId('');
      })
      .catch(err => {
        console.error(err);
        setMessage('❌ Erro ao criar o ticket.');
      });
  };

  return (
    <div className="ticket-form-container">
      <h2>Criar Novo Ticket</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} className="ticket-form">
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <select value={clientId} onChange={(e) => setClientId(e.target.value)} required>
          <option value="">Selecione o Cliente</option>
          {clients.map(client => (
            <option key={client.id} value={client.id}>{client.name}</option>
          ))}
        </select>

        <select value={operatorId} onChange={(e) => setOperatorId(e.target.value)} required>
          <option value="">Selecione o Operador</option>
          {operators.map(op => (
            <option key={op.id} value={op.id}>{op.name}</option>
          ))}
        </select>

        <button type="submit">Criar Ticket</button>
      </form>
    </div>
  );
};

export default CreateTicket;
