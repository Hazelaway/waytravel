import React from 'react';
import Carta from '../Carta/Carta';
import './Cartas.css';

const cartasData = [
  {
    title: 'Autobuses',
    description: 'Utilizamos Autobuses modernos de menos de 5 años de antigüedad.',
    icon: 'bx-bus', // Clase de Boxicons para el icono
  },
  {
    title: 'Seguridad',
    description: 'Contamos con los mejores expertos guías y conductores.',
    icon: 'bx-check-shield', // Clase de Boxicons para el icono
  },
  {
    title: 'Recorridos',
    description: 'Diseñados para tener una experiencia inolvidable.',
    icon: 'bx-map', // Clase de Boxicons para el icono
  },
];

const Cartas = () => (
  <div className="cartas-container">
    {cartasData.map((data, index) => (
      <Carta 
        key={index}
        title={data.title}
        description={data.description}
        icon={data.icon}
      />
    ))}
  </div>
);

export default Cartas;



