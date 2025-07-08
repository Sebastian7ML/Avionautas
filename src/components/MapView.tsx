import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import './MapView.css';

const position: LatLngExpression = [40.4168, -3.7038];

const MapView: React.FC = () => (
  <div className="map-rounded">
    <MapContainer center={position} zoom={4} style={{ width: '100%', height: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Example marker in Madrid!
        </Popup>
      </Marker>
    </MapContainer>
  </div>
);

export default MapView;