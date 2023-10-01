import React, { useEffect, useRef, useState } from 'react';

function GoogleMap() {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Función para inicializar el mapa
    window.initMap = () => {
      // Coordenadas para ubicar el mapa en un lugar específico
      const myLatLng = { lat: -34.397, lng: 150.644 };

      // Crear un nuevo mapa y mostrarlo en el contenedor
      const map = new window.google.maps.Map(mapContainerRef.current, {
        zoom: 8,
        center: myLatLng,
      });

      // Marcar una ubicación en el mapa (opcional)
      const marker = new window.google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Mi Ubicación',
      });

      setMap(map); // Guarda la referencia del mapa en el estado
    };

    // Cargar el script de Google Maps con tu API Key como parámetro
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC-h2BKXgWmyaI7VY6PsIopucFQpgUF2EU&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      // Manejo de errores si el script de Google Maps no se carga correctamente
      console.error('Error al cargar el script de Google Maps.');
    };

    script.onload = () => {
      // El script de Google Maps se ha cargado, no es necesario hacer nada aquí
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h1 className="display-4">Mapa de Google en el Inicio</h1>
      {/* Contenedor para el mapa con clases de Bootstrap */}
      <div id="map-container" className="map-responsive" ref={mapContainerRef}></div>
    </div>
  );
}

export default GoogleMap;
