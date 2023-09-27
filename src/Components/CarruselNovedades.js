import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarruselNovedades() {
  return (
    <Carousel aria-label='carrusel de Novedades'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/riñonera_ala.jpg"
          alt="Riñonera Ala"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/img_Mochila30lts.jpg"
          alt="Mochila Pampa"
        />
          </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/img_Neceser.jpg"
          alt="Neceser Ligera"
        />
          </Carousel.Item>
      {/* Agrega más elementos Carousel.Item para otros productos */}
    </Carousel>
  );
}

export default CarruselNovedades;
