import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';

function Encabezado() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="logoybarra">
            <img
              src="../images/logo_chaltu_bags.jpg"
              className="logo"
              alt="logo"
            />
            <h1>CHALTU Bags</h1>
          </div>
        </div>
        <div className="col-md-6">
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
          <h2>
            <div className="compraencuotas">
              <FontAwesomeIcon icon={faHandHoldingDollar} /> Comprá en cuotas y
              con tarjeta de crédito de todos los bancos
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Encabezado;
