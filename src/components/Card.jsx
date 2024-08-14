import React, { useState } from 'react';
import Form from './Form';
import Message from './Message';
import "../Card.css"

const Card = () => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length >= 3 && color.trim().length >= 6) {
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