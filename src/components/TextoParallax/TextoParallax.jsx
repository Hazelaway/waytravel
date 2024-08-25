import React, { useEffect, useState } from 'react';
import Plx from 'react-plx';
import './TextoParallax.css';

const TextoParallax = ({ title, description, image, startText, endText, startImage, endImage }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', checkMobile);
    checkMobile();
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const parallaxDataText = [
    {
      start: isMobile ? startText * 0.8 : startText,
      end: isMobile ? endText * 1 : endText,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: 'opacity',
        },
      ],
    },
  ];

  const parallaxDataImage = [
    {
      start: isMobile ? startImage * 0.7 : startImage,
      end: isMobile ? endImage * 0.8 : endImage,
      properties: [
        {
          startValue: 1,
          endValue: 1.2,
          property: 'scale',
        },
        {
          startValue: 1,
          endValue: 0,
          property: 'opacity',
        },
      ],
    },
  ];

  return (
    <div className="texto-parallax">
      <Plx className="text-content" parallaxData={parallaxDataText}>
        <h1>{title}</h1>
        <p>{description}</p>
      </Plx>
      <Plx className="parallax-image" parallaxData={parallaxDataImage}>
        <img src={image} alt={title} />
      </Plx>
    </div>
  );
};

export default TextoParallax;

  








