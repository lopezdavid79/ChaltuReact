import React from "react";
import logo1 from "../../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import './Encabezado.css';
import Buscar from "./buscar"
function Encabezado() {
  return (
    <div className="container">
      <div className="row logoybarra">
        <div className="col-md-4">
          <a href="../index.html">
          <img src={logo1} className="logo" alt="logo" />
          </a>
          <h1>CHALTU Bags</h1>
          </div>
<Buscar/>
          <div className="compraencuotas">
            <h3>
              <FontAwesomeIcon icon={faHandHoldingDollar} /> Comprá en cuotas y
              con tarjeta de crédito de todos los bancos
            </h3>
          </div>
        </div>
      </div>
    
  );
}

export default Encabezado;
