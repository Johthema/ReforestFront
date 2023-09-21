import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ lat, lng }) => {
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const defaultCenter = {
    lat: parseFloat(lat),
    lng: parseFloat(lng),
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyACBgQShSpBeW7AX_uvGJgdGwH7EF2OovI">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={8}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;