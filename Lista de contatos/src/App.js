import React, { useState } from 'react';

function ListaDeContatos() {
  const [contatos, setContatos] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [editando, setEditando] = useState(null);


  const adicionarOuSalvarContato = () => {
    if (nome && telefone && email) {
      if (editando !== null) {
        const novosContatos = contatos.map((contato, index) =>
          index === editando ? { nome, telefone, email } : contato
        );
        setContatos(novosContatos);
        setEditando(null);
      } else {
        setContatos([...contatos, { nome, telefone, email }]);
      }
      limparCampos();
    }
  };

  // Editar um contato existente
  const editarContato = (index) => {
    const contato = contatos[index];
    setNome(contato.nome);
    setTelefone(contato.telefone);
    setEmail(contato.email);
    setEditando(index);
  };

  // Remover um contato
  const removerContato = (index) => {
    setContatos(contatos.filter((_, i) => i !== index));
  };

  // Limpar os campos do formulário
  const limparCampos = () => {
    setNome('');
    setTelefone('');
    setEmail('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Lista de Contatos</h2>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
          style={inputStyle}
        />
        <input
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="Telefone"
          style={inputStyle}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          style={inputStyle}
        />
        <button onClick={adicionarOuSalvarContato} style={buttonStyle}>
          {editando !== null ? 'Salvar' : 'Adicionar'}
        </button>
      </div>
      <ul style={listStyle}>
        {contatos.map((contato, index) => (
          <li key={index} style={itemStyle}>
            <strong>{contato.nome}</strong> - {contato.telefone} - {contato.email}
            <div>
              <button onClick={() => editarContato(index)} style={buttonSmallStyle}>
                Editar
              </button>
              <button onClick={() => removerContato(index)} style={buttonSmallStyle}>
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Estilos simples para os elementos
const inputStyle = {
  margin: '5px',
  padding: '10px',
  fontSize: '1rem',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '1rem',
  cursor: 'pointer',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#007BFF',
  color: '#fff',
};

const buttonSmallStyle = {
  margin: '5px',
  padding: '5px 10px',
  fontSize: '0.9rem',
  cursor: 'pointer',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#28A745',
  color: '#fff',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
};

const itemStyle = {
  padding: '10px',
  marginBottom: '10px',
  backgroundColor: '#f9f9f9',
  border: '1px solid #ddd',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export default ListaDeContatos;
