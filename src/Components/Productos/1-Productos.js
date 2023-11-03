import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import ProductForm from "./ProductForm"

function Productos() {
  return (
    <section className="producto">
      <h3>Productos</h3>
      <ProductForm />
        <div className="row listado">
          <article className="oferta col-3">
            <img
              src="../images/img_Botinero_teo.jpg"
              alt="Botinero Teo"
              className="product_img img-fluid"
            />
<p className="precio">$9.500</p>

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
            <p className="precio">$25.000</p>
            
            <FontAwesomeIcon icon={faTruck} className="truck-icon" />
            <h4 className="descripcion">La Mochila Aguila</h4>
          </article>
          <article className="oferta col-3">
            <img
              src="../images/img_riñonera_toro.jpg"
              alt="Riñonera Toro"
              className="product_img img-fluid"
            />

            <p className="precio">$4.500</p>

            <FontAwesomeIcon icon={faTruck} className="truck-icon" />
            <h4 className="descripcion">La Riñonera Toro</h4>
          </article>
          <article className="oferta col-3">
            <img
              src="../images/img_Mochila_Athix.webp"
              alt="Mochila Athix"
              className="product_img img-fluid"
            />
            <p className="precio">$23.200</p>
            
            <FontAwesomeIcon icon={faTruck} className="truck-icon" />
            <h4 className="descripcion">La Mochila Athix</h4>
          </article>
      </div>
            
    </section>
  );
}

export default Productos;
