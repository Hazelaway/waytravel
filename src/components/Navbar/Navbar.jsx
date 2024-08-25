import React from 'react';
import { Link } from 'react-router-dom';
import MenuHamburguesa from '../MenuHamburguesa/MenuHamburguesa';
import './Navbar.css';


const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-content">
      <Link to="/" className="navbar-logo-link">
        <img src="/logowaytravel.jpg" alt="Logo" className="navbar-logo" />
      </Link>
      <div className="navbar-links-container">
        <ul className="navbar-links">
          <li><Link to="/itinerario" className="navbar-link">Itinerario</Link></li>
          <li><Link to="/contacto" className="navbar-link">Contacto</Link></li>
        </ul>
      </div>
      <MenuHamburguesa />
    </div>
  </nav>
);

export default Navbar;


