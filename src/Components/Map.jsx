import React, { useEffect, useState } from "react";
import {
  Circle,
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { createRef } from "../Utility/creatRef";
const containerStyle = {
  width: "300px",
  height: "300px",
  borderRadius: "20px",
  border: "2px solid #0a2145",
  boxShadow: "0 2px 10px #0a2145",
  boxSizing: "border-box",
};

const center = {
  lat: 53.48,
  lng: -2.24,
};

function Map({ events }) {
  const [markerLoactions, setMarkerlocation] = useState([]);
  const [location, setLocation] = useState(center);
  const [error, seterror] = useState();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAPS_KEY,
  });
  const [map, setMap] = useState(null);
  function errorcallback(error) {
    seterror(error);
  }

  async function sucessfulLockup(postion) {
    const latitude = postion.coords.latitude;
    const longitude = postion.coords.longitude;
    setLocation({ lat: latitude, lng: longitude });
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(sucessfulLockup, errorcallback);
    createRef(events).then((d) => {
      setMarkerlocation(d);
    });
  }, [events]);
  const zoom = 12;
  const onLoad = React.useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(location);
      // map.fitBounds(bounds);
      map.setZoom(zoom);
      setMap(map);
    },
    [location]
  );

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location}
      zoom={8}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {events &&
        markerLoactions.map((event) => {
          return (
            <Marker
              label={event.category}
              position={{ lat: event.lat, lng: event.lng }}
              key={Math.random()}
            />
          );
        })}
      {/* <Marker title='old trafford' position={{lat:53.4631, lng:-2.2913}}/> */}
      {/* <Circle center={location} radius={3000} /> */}
    </GoogleMap>
  ) : (
    <></>
  );
}
export default React.memo(Map);
