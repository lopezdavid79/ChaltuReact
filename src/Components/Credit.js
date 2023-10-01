import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faGift, faUserShield } from '@fortawesome/free-solid-svg-icons';

function Credit() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <div className="text-center">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faCreditCard} size="2x" />
            </div>
            <h4 className="mt-3">Pagá con tarjeta o en efectivo</h4>
            <p className="custom-paragraph">
            En Chaltu Bags, tenés cuotas sin interés con tarjeta o efectivo en puntos de pago. ¡Y siempre es seguro!</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-center">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faGift} size="2x" />
            </div>
            <h4 className="mt-3">Envío gratis desde $7.999</h4>
            <p className="custom-paragraph">Tenés envíos gratis a todo el país, lo recibís en tu casa y sin demoras.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-center">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faUserShield} size="2x" />
            </div>
            <h4 className="mt-3">Seguridad, de principio a fin</h4>
            <p className="custom-paragraph">¿No te gusta? ¡Devuélvelo! En Chaltu Bags, no hay nada que no puedas hacer, porque estás siempre protegido.</p>
          </div>
        </div>
      </div>
    </div>
  );
  }
  export default Credit;