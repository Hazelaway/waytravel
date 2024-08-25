import React from 'react';
import Carrusel from '../../components/Carrusel/Carrusel';
import './Home.css';
import Tarjeta from '../../components/Tarjeta/Tarjeta';
import Cartas from '../../components/Carta/Cartas'; 



const Home = () => (
  <div className="home">
    <Carrusel />
    <section className="content">
      <h1>Bienvenido al mejor recorrido por España</h1>
      <p>Descubre experiencias inolvidables.</p>
      <p>
      Sumérgete en la esencia de España con nuestros circuitos exclusivos que combinan tradición, cultura y aventura. En WAY TRAVEL tenemos muchísima experiencia creando momentos únicos para viajeros como tú. Nuestro equipo de expertos, con una profunda pasión por cada rincón de España, se dedica a ofrecerte un viaje que va más allá de lo ordinario. Desde las majestuosas ciudades históricas hasta los rincones ocultos de la península, cada itinerario está cuidadosamente diseñado para garantizarte una experiencia enriquecedora y memorable.
      </p>
      <p>
      Descarga nuestro folleto y empieza a planificar tu aventura ahora mismo:
      </p>
    <Tarjeta />
      <p>
      ¿Estás listo para comenzar tu próximo gran viaje? Explora nuestra sección de itinerarios para descubrir las rutas que hemos diseñado especialmente para ti. Desde las vibrantes calles de Madrid hasta la increíble arquitectura de Barcelona, cada recorrido promete una inmersión total en la cultura española. No pierdas la oportunidad de transformar tus sueños de viaje en realidad.
      </p>
    <Cartas />
    <blockquote>
        "El mundo es un libro, y aquellos que no viajan solo leen una página"
    </blockquote>
    </section>
  </div>
);

export default Home;

