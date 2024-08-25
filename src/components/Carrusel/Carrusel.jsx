import React from 'react';
import Slider from 'react-slick';
import './Carrusel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true
  };

  return (
    <div className="carrusel">
      <Slider {...settings}>
        <div>
          <img src="/cabecera1.jpg" alt="cordoba" className="carrusel-image" />
        </div>
        <div>
          <img src="/cabecera2.jpg" alt="granada" className="carrusel-image" />
        </div>
        <div>
          <img src="/cabecera3.jpg" alt="valencia" className="carrusel-image" />
        </div>
        <div>
          <img src="/cabecera4.jpg" alt="zaragoza" className="carrusel-image" />
        </div>
      </Slider>
      <img src="/waytravel.png" alt="Logo" className="carrusel-logo" />
    </div>
  );
};

export default Carrusel;




