import React, { useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import {createRef} from "../Utility/creatRef";
const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 53.48,
  lng: -2.24
};

// const events = ([
//   {
//     category: "netball",
//   event_id: 10,
//   firebase_id: "as",
//   gender: "female",
//   skills_level: 5,
//   location: "M11 4DQ",
//   },
//   {
//     event_id: 10,
//     firebase_id: "ds",
//     gender: "female",
//     skills_level: 5,
//     location: "M12 4DY",
//     },
//   ])
  
  
function Map({events}) {
  const [markerLoactions, setMarkerlocation] = useState([])
  const [location, setLocation] = useState(center)
  const [error, seterror] = useState()
 
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB_krhi9Y0ZhqLYMN5DfVMVD06UCjnJ78A"
  })
  const [map, setMap] = useState(null)
  function errorcallback(error) {
    seterror(error);
  }

  async function sucessfulLockup(postion) {
    const latitude = postion.coords.latitude;
    const longitude = postion.coords.longitude;
    console.log(latitude);
    console.log(longitude);
    setLocation({lat:latitude, lng:longitude})
  }
  useState(()=>{
    navigator.geolocation.getCurrentPosition(sucessfulLockup, errorcallback);
    createRef(events).then((d)=>{
      setMarkerlocation(d)
    })
  },[])
  
  const onLoad = React.useCallback(function callback(map) {
    console.log(location)
    const bounds = new window.google.maps.LatLngBounds(location);
    map.fitBounds(bounds);
    setMap(map)
  }, [location])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={8}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        {events && markerLoactions.map(event=>{
          return <Marker title = {event.category} position={{lat:event.lat, lng:event.lng}}/>
        })}
        <Marker title='old trafford' position={{lat:53.4631, lng:-2.2913}}/>
        <Marker title='old trafford' position={{lat: 53.6328476, lng:-1.7887481}}/>
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map);