import React from 'react';
import './Carta.css';

const Carta = ({ title, description, icon }) => (
  <div className="carta">
    <div className="carta-header">
      {/* Verifica si el icono es de box-icon o bx */}
      {icon.includes('box-icon') ? (
        <box-icon name={icon.replace('box-', '')} className="carta-icon"></box-icon>
      ) : (
        <i className={`bx ${icon} carta-icon`}></i>
      )}
    </div>
    <div className="carta-body">
      <h5 className="carta-title">{title}</h5>
      <p className="carta-description">{description}</p>
    </div>
  </div>
);

export default Carta;



