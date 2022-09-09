import React, { useEffect } from 'react';
import './index.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { showDataOnMap } from '../../../../utils/helper';

function MapCases({
  center, zoom, countries, casesType,
}) {
  console.log('countriesMap', countries);
  function RecenterAutomatically({ position }) {
    const map = useMap();
    useEffect(() => {
      map.setView(position);
      map.setZoom(zoom);
    }, position);
    return null;
  }
  return (
    <div className="map-cases">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RecenterAutomatically position={center} />
        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  );
}

export default React.memo(MapCases);
