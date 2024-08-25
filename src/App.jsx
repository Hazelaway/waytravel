import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Itinerario from './pages/Itinerario/Itinerario';
import Contacto from './pages/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import AvisoLegal from './pages/AvisoLegal/AvisoLegal';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad/PoliticaPrivacidad';
import PoliticaCookies from './pages/PoliticaCookies/PoliticaCookies';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/itinerario" element={<Itinerario />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/aviso-legal" element={<AvisoLegal />} />
      <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
      <Route path="/politica-cookies" element={<PoliticaCookies />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;

