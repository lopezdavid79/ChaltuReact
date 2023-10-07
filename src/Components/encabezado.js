import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";

function Encabezado() {
  return (
    <div className="container">
      <div className="row logoybarra">
        <div className="col-md-4">
          <a href="../index.html">
            <img src="../images/logo.jpg" className="logo" alt="logo" />
          </a>
          <h1>CHALTU Bags</h1>
        </div>
        <div className="col-md-8">
          <form action="#" method="GET" role="search" className="form">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar mochilas, Riñoneras y más"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </form>
          <div className="compraencuotas">
            <h3>
              <FontAwesomeIcon icon={faHandHoldingDollar} /> Comprá en cuotas y
              con tarjeta de crédito de todos los bancos
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Encabezado;
