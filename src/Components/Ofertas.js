import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

function Ofertas() {
  return (
    <section className="container mt-5">
      <h3 className="ofertas">Ofertas</h3>
      <div className="row listado">
        <article className="col-md-3 product mb-4">
          <img src="../images/img_Botinero_teo.jpg" alt="Botinero Teo" className="product_img img-fluid" />
          <div className="main-article">
            <p className="precio">$6.770</p>
            <p className="descuento">40% off</p>
            <FontAwesomeIcon icon={faTruck} className="truck-icon" />
            <h4 className="descripcion">Botinero Teo, cuenta con bolsillo frontal</h4>
          </div>
        </article>
        <article className="col-md-3 product mb-4">
          <img src="../images/img_Mochila_Aguila.webp" alt="Mochila Aguila" className="product_img img-fluid" />
          <div className="main-article">
            <p className="precio">$25.000</p>
            <p className="descuento">20% off</p>
            <FontAwesomeIcon icon={faTruck} className="truck-icon" />
            <h4 className="descripcion">La Mochila Aguila</h4>
          </div>
        </article>
        <article className="col-md-3 product mb-4">
          <img src="../images/img_riñonera_toro.jpg" alt="Riñonera Toro" className="product_img img-fluid" />
          <div className="main-article">
            <p className="precio">$4.500</p>
            <p className="descuento">10% off</p>
            <FontAwesomeIcon icon={faTruck} className="truck-icon" />
            <h4 className="descripcion">La Riñonera Toro</h4>
          </div>
        </article>
        <article className="col-md-3 product mb-4">
          <img src="../images/img_Mochila_Athix.webp" alt="Mochila Athix" className="product_img img-fluid" />
          <div className="main-article">
            <p className="precio">$23.200</p>
            <p className="descuento">5% off</p>
            <FontAwesomeIcon icon={faTruck} className="truck-icon" />
            <h4 className="descripcion">La Mochila Athix</h4>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Ofertas;
