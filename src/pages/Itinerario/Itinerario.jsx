import React, { useState, useEffect } from 'react'; // Asegúrate de importar useState y useEffect
import ParallaxComponent from '../../components/Parallax/Parallax';
import TextoParallax from '../../components/TextoParallax/TextoParallax';
import './Itinerario.css'; // Asegúrate de que tu CSS esté correctamente vinculado
import Tarjeta from '../../components/Tarjeta/Tarjeta';

const Itinerario = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Función para desplazar a la parte superior
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Función para manejar el evento de desplazamiento
  const handleScroll = () => {
    if (window.scrollY > 300) { // Ajusta este valor según sea necesario
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <ParallaxComponent />
      <TextoParallax 
        title="Días 0-2: Madrid y Alrededores"
        description="Exploraremos Madrid, Segovia y Toledo"
        image="/madrid.jpg"
        startText={900}
        endText={2000}
        startImage={900}
        endImage={2000}
      />
      <TextoParallax 
        title="Días 3-4: Sevilla"
        description="Visitaremos Sevilla, Itálica y Río Tinto"
        image="/sevilla.jpg"
        startText={1900}
        endText={2800}
        startImage={1900}
        endImage={2800}
      />
      <TextoParallax 
        title="Día 5: Córdoba"
        description="Descubriremos el antiguo corazón de Al Andalus"
        image="/cordoba.jpg"
        startText={2500}
        endText={3000}
        startImage={2500}
        endImage={3000}
      />
      <TextoParallax 
        title="Días 6-7: Granada y Valencia"
        description="Nos maravillaremos con la Alhambra y Valencia"
        image="/alhambra.jpg"
        startText={3100}
        endText={3600}
        startImage={3100}
        endImage={3600}
      />
      <TextoParallax 
        title="Días 8-9: Barcelona"
        description="Barcelona nos asombrará con su increíble arquitectura"
        image="/barcelona.jpg"
        startText={3700}
        endText={4200}
        startImage={3700}
        endImage={4200}
      />
      <TextoParallax 
        title="Día 10: Zaragoza"
        description="Una cita con Zaragoza, cruce de caminos de la historia"
        image="/zaragoza.jpg"
        startText={4400}
        endText={4900}
        startImage={4400}
        endImage={4900}
      />
      <TextoParallax 
        title="Día 11: San Sebastián y Bilbao"
        description="El País Vasco nos deleitará con su mezcla moderna y tradicional"
        image="/bilbao.jpg"
        startText={4900}
        endText={5400}
        startImage={4900}
        endImage={5400}
      />
      <TextoParallax 
        title="Día 12: Cabárceno y Gijón"
        description="Desvelaremos un espacio naturalizado que no es un zoológico"
        image="/cabarceno.jpg"
        startText={5800}
        endText={6300}
        startImage={5500}
        endImage={6000}
      />
      <TextoParallax 
        title="Días 13-14-15: Santiago de Compostela y regreso a Madrid"
        description="Finalizaremos deslumbrándonos con la imponente Catedral de Santiago"
        image="/santiago.jpg"
        startText={6800}
        endText={7100}
        startImage={6000}
        endImage={6500}
      />
      <div className="extra-content">
        <h2>Este es el recorrido en el mapa de España</h2>
        <p>Un viaje increíble por casi toda España, explorando su cultura y paisajes.</p>
        <img src="/mapaviaje.png" alt="Mapa del Viaje" />
      </div>
      <div className="folleto">
        <h2>Itinerario descargable</h2>
        <p>Descarga el Itinerario en pdf clicando en la imagen.</p>
        <Tarjeta />
      </div>
      <section className="cita">
        <blockquote>
        "Viajar es pasear un sueño...y la posibilidad de realizar un sueño, es lo que hace que la vida sea interesante"
        </blockquote>
      </section>

      <button className={`scroll-up ${showScroll ? '_show-scroll' : ''}`} onClick={scrollToTop}>
        <div className="arrow-up"></div>
      </button>
    </div>
  );
};

export default Itinerario;


