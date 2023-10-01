import React from 'react';
import MapContainer from './MapContainer';



function Info() {  
const phoneNumber = '3534294632';

  // Genera el enlace de WhatsApp con un mensaje predefinido.
  const whatsappLink = `https://wa.me/${phoneNumber}?text=¡Hola! Estoy interesado en tus productos.`;

  return (
    <div>
      <p className="float-right">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        {/* <FontAwesomeIcon icon={faWhatsapp} />  */}
        Contactar por WhatsApp
        </a>
<MapContainer/>      
      </p>
      <p>Copyright © 2023 Chaltu Bags</p>
    </div>
  );
}

export default Info;
