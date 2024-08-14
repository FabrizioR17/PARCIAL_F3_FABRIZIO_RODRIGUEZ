import React from 'react';
import '../Card.css';

const Message = ({ name, color }) => {
    return (
      <div className="message">
        <h3>Hola {name}!</h3>
        <p>Sabemos que tu color favorito es:</p>
        <div className="color-box">{color}</div>
      </div>
    );
  };
  

export default Message;
