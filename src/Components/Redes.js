import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Redes() {
  return (
    <div className="d-flex">
              <h2 className="text-center">Seguinos:</h2>

      <div className="col">
        
        <a href="https://www.facebook.com/chaltubags/" aria-label="link Facebook" target="_blank" rel="noopener noreferrer">
          <FaFacebook /> Facebook
        </a>
      </div>
      <div className="col">
        <a href="https://www.instagram.com/p/CPoeChPsyEJ/" aria-label="link Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
        </a>
      </div>
    </div>
  );
}

export default Redes;
