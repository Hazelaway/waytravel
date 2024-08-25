import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuHamburguesa.css';

const MenuHamburguesa = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="menu-hamburguesa">
      <button className="menu-button" onClick={toggleMenu}>
        <i className='bx bx-menu'></i>
      </button>
      <div className={`menu-content ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/itinerario" onClick={closeMenu}>Itinerario</Link></li>
          <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default MenuHamburguesa;

