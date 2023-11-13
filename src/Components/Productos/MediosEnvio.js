
import React, { useState } from 'react';

const MediosEnvio = () => {
  // Estados para el código postal y el costo de envío
  const [codigoPostal, setCodigoPostal] = useState('');
  const [costoEnvio, setCostoEnvio] = useState(null);

  // Función para calcular el costo de envío
  const calcularCostoEnvio = () => {
    // Aquí puedes agregar la lógica para calcular el costo según el código postal
    // Puedes llamar a una API externa, tener una tabla de costos, etc.
    // Por ahora, solo mostraremos un mensaje de ejemplo.
    setCostoEnvio('¡Costo de envío calculado con éxito!');
  };

  return (
    <div>
      <h2>Calculadora de Costo de Envío</h2>
      <label>
        Código Postal:
        <input
          type="text"
          value={codigoPostal}
          onChange={(e) => setCodigoPostal(e.target.value)}
        />
      </label>
      <button onClick={calcularCostoEnvio}>Calcular Costo de Envío</button>
      {costoEnvio && <p>{costoEnvio}</p>}
    </div>
  );
};

export default MediosEnvio;
