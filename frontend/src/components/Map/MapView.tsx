import 'leaflet/dist/leaflet.css';
import type { Branch } from "../../types/branch";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface MapViewProps {
  branches: Branch[]
}

function MapView({ branches }: MapViewProps) {
  return (
    <MapContainer center={[-28.4793, 24.6727]} zoom={6} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {branches.map((branch) => (
        <Marker
            key={branch.id}
            position={[branch.location.latitude, branch.location.longitude]}
        >
            <Popup>
            <strong>{branch.name}</strong>
            <p>{branch.location.address}</p>
            </Popup>
        </Marker>
        ))}
    </MapContainer>
  )
}

export default MapView