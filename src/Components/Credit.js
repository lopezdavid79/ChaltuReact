import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faGift, faUserShield } from '@fortawesome/free-solid-svg-icons';

function Credit() {
  return (
    <div className="cajasfooter">
      <section>
        <div><FontAwesomeIcon icon={faCreditCard} size="2x" /></div>
        <h4>Pagá con tarjeta o en efectivo</h4>
        <p>En Chaltu Bags, tenés cuotas sin interés con tarjeta o efectivo en puntos de pago. ¡Y siempre es seguro!</p>
      </section>
      <section>
        <div><FontAwesomeIcon icon={faGift} size="2x" /></div>
        <h4>Envío gratis desde $ 7.999</h4>
        <p>Tenés envíos gratis a todo el país, lo recibís en tu casa y sin demoras.</p>
      </section>
      <section>
        <div><FontAwesomeIcon icon={faUserShield} size="2x" /></div>
        <h4>Seguridad, de principio a fin</h4>
        <p>¿No te gusta? ¡Devuélvelo! En Chaltu Bags, no hay nada que no puedas hacer, porque estás siempre protegido.</p>
      </section>
    </div>
  );
}

export default Credit;
