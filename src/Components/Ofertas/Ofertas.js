import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import './Ofertas.css'

function Ofertas() {
  return (
    <section className="ofertas">
      <h3>Ofertas</h3>
        <div className="row listado">
          <article className="oferta col-3">
            <img
              src="../images/img_Botinero_teo.jpg"
              alt="Botinero Teo"
              className="product_img img-fluid"
            />
            <p className="precio">Antes: $9.500</p>
            <p className="precio">$7.600</p>
            <p className="descuento">20% off</p>
            <FontAwesomeIcon icon={faTruck} className="truck-icon" />
            <h4 className="descripcion">
              Botinero Teo
            </h4>
          </article>
          <article className="oferta col-3">
            <img
              src="../images/img_Mochila_Aguila.webp"
              alt="Mochila Aguila"
              className="product_img img-fluid"
            />
            <p className="precio">Antes $25.000</p>
            <p className="precio">$21.350</p>
            <p className="descuento">15% off</p>
            <FontAwesomeIcon icon={faTruck} className="truck-icon" />
            <h4 className="descripcion">La Mochila Aguila</h4>
          </article>
          <article className="oferta col-3">
            <img
              src="../images/img_riñonera_toro.jpg"
              alt="Riñonera Toro"
              className="product_img img-fluid"
            />

<p className="precio">Antes $6.500</p>
            <p className="precio">$5.850</p>
            <p className="descuento">10% off</p>
            <FontAwesomeIcon icon={faTruck} className="truck-icon" />
            <h4 className="descripcion">La Riñonera Toro</h4>
          </article>
          <article className="oferta col-3">
            <img
              src="../images/img_Mochila_Athix.webp"
              alt="Mochila Athix"
              className="product_img img-fluid"
            />
            <p className="precio">Antes $26.500</p>
            <p className="precio">$23.200</p>
            
            <FontAwesomeIcon icon={faTruck} className="truck-icon" />
            <h4 className="descripcion">La Mochila Athix</h4>
          </article>
      </div>
    </section>
  );
}

export default Ofertas;
