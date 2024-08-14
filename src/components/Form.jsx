import React from 'react';
import '../Form.css';

const Form = ({ name, setName, color, setColor, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="form">
      
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
      <input
        type="text"
        placeholder="Ingresa tu color favorito (formato HEX)"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button type="submit">ENVIAR</button>
    </form>
  );
};

export default Form;

