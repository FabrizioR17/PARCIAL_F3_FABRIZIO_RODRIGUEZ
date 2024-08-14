import React, { useState } from 'react';
import Form from './Form';
import Message from './Message';
import "../Card.css"

const Card = () => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Función para validar si un string es un color hexadecimal válido
  const isValidHexColor = (color) => {
    const hexRegex = /^#([0-9A-F]{3}){1,2}$/i;
    return hexRegex.test(color);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length >= 3 && isValidHexColor(color.trim())) {
      setShowMessage(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Por favor chequea que la información sea correcta.');
      setShowMessage(false);
    }
  };

  return (
    <div className="card-container">
      <Form
        setName={setName}
        setColor={setColor}
        handleSubmit={handleSubmit}
      />
      {errorMessage && <p className="error">{errorMessage}</p>}
      {showMessage && <Message name={name} color={color} />}
    </div>
  );
};

export default Card;