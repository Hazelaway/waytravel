// src/components/Tarjeta.jsx
import React from 'react';
import './Tarjeta.css'; // Asegúrate de que este archivo CSS exista

const Tarjeta = () => {
  const handleClick = () => {
    const link = document.createElement('a');
    link.href = '/folleto.pdf'; // Ajusta la ruta al archivo PDF
    link.download = 'folleto.pdf';
    link.click();
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src="/portadaitinerario.jpg" alt="Itinerary Cover" className="card-image" />
      <div className="card-content">
        <span className="card-text">Itinerario Principal</span>
      </div>
    </div>
  );
};

export default Tarjeta;

