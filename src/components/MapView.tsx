import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import './MapView.css';
import { characters, type Character } from './characters';

const defaultCenter: LatLngExpression = [40.4168, -3.7038];


interface MapViewProps {
  onSelect?: (character: Character) => void;
}

const MapView: React.FC<MapViewProps> = ({ onSelect }) => (
  <div className="map-rounded">
    <MapContainer center={defaultCenter} zoom={3} style={{ width: '100%', height: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {characters.filter(c => c.coords).map((char) => (
        <Marker position={char.coords as LatLngExpression} key={char.id}>
          <Popup>
            <div style={{textAlign:'center', cursor: onSelect ? 'pointer' : undefined}} onClick={() => onSelect && onSelect(char)}>
              <img src={char.image} alt={char.alias} style={{width:48, height:48, borderRadius:'50%', marginBottom:6, objectFit:'cover', background:'#222'}} />
              <div><strong>{char.alias}</strong></div>
              <div style={{fontSize:'0.95em', opacity:0.8}}>{char.city}</div>
              {onSelect && <div style={{fontSize:'0.85em', color:'#1976d2', marginTop:4}}>Ver perfil</div>}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  </div>
);

export default MapView;