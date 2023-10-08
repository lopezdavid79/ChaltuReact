import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import './Redes.css'

function Redes() {
  const phoneNumber = "3534294632";

  // Genera el enlace de WhatsApp con un mensaje predefinido.
  const whatsappLink = `tel:${phoneNumber}`;

  return (
    <div className="container">
      <div className="row redes">
        <h3>Seguinos:</h3>
        <div className="col-sm">
          <a
            href="https://www.facebook.com/chaltubags/"
            aria-label="link Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="facebook" /> Facebook
          </a>
        </div>
        <div className="col-sm">
          <a
            href="https://www.instagram.com/p/CPoeChPsyEJ/"
            aria-label="link Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="instagram" /> Instagram
          </a>
        </div>
        <div className="col-sm">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="whatsapp" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default Redes;
