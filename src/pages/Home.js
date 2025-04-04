import React from 'react';
import './HomeCarousel.css';
import Products from './Products';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import hero_image from './images/hero_image.jpg'
function Home() {
  const items = [
    <div className="item"><img src={hero_image} alt="Gadget 1" /></div>,
    <div className="item"><img src={hero_image} alt="Gadget 2" /></div>,
    <div className="item"><img src={hero_image} alt="Gadget 3" /></div>
  ];

  return (
    <div>
      <AliceCarousel 
        mouseTracking 
        items={items} 
        autoPlay 
        autoPlayInterval={3000} 
        infinite 
      />
      <Products />
    </div>
  );
}

export default Home;
