import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

interface Props {
  center: any;
}

const GoogleMapComponent = ({ center }: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY!,
  });
  if (!isLoaded) {
    return <></>;
  }
  return (
    <GoogleMap mapContainerClassName="map-container" center={center} zoom={12}>
      <MarkerF
        position={{ lat: center.lat, lng: center.lng }}
        icon={"https://maps.google.com/mapfiles/ms/icons/red-dot.png"}
      />
    </GoogleMap>
  );
};

export default GoogleMapComponent;
