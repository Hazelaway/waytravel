import React from "react";
import Plx from "react-plx";
import './Parallax.css';

const parallaxData = [
  {
    start: 0,
    end: 800,
    properties: [
      {
        startValue: 1,
        endValue: 1.5,
        property: "scale",
      },
    ],
  },
];

const textParallaxData = [
    {
      start: 0,
      end: 300,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        },
        {
          startValue: 0,
          endValue: -50,
          property: "translateY",
        },
      ],
    },
  ];

const ParallaxComponent = () => {
  return (
    <div className="parallax-wrapper">
      <div className="parallax-container">
        <Plx className="plx-alhambra" parallaxData={parallaxData}>
          <img src="/alhambra.jpg" alt="Alhambra" className="alhambra-image" />
        </Plx>
        <Plx className="centered-text" parallaxData={textParallaxData}>
          <h2>Adéntrate en un viaje Mágico</h2>
        </Plx>
        <div className="arboles-overlay">
          <img src="/fondotrees.png" alt="Arboles" className="arboles-image" />
        </div>
      </div>
      <div className="content">
        <h1>España Legendaria</h1>
        <p>Sumérjase en un mundo de cuento...</p>
      </div>
    </div>
  );
};

export default ParallaxComponent;
