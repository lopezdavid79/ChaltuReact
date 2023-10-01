import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function MapContainer(props) {
  return (
    <Map
      google={props.google}
      zoom={14}
      initialCenter={{
        lat: 37.7749, // Latitud
        lng: -122.4194, // Longitud
      }}
    >
      <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC-h2BKXgWmyaI7VY6PsIopucFQpgUF2EU',
})(MapContainer);
