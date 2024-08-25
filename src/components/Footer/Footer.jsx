import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="links">
      <Link to="/aviso-legal">Aviso Legal</Link>
      <Link to="/politica-privacidad">Política de Privacidad</Link>
      <Link to="/politica-cookies">Política de Cookies</Link>
    </div>
    <div className="copyright">
      &copy; 2024 Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer;
