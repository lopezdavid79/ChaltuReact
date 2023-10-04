import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function MapContainer(props) {
  return (
    <Map
      google={props.google}
      zoom={14}
      language="es" // Cambia "es" al código de idioma deseado
      initialCenter={{
        lat: -32.03270265832883,  // Latitud
        lng: -63.57615640502369, // Longitud
      }}
      
    >
      <Marker position={{ lat: -32.03270265832883 , lng: -63.57615640502369}} />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC-h2BKXgWmyaI7VY6PsIopucFQpgUF2EU',
  language:"es", // Cambia "es" al código de idioma deseado
})(MapContainer);
