// const MapPage = () => {
//     return <div><h1>Map Page goes here...</h1></div>;
// };

import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

var SERVER = "http://localhost:5000"
const containerStyle = {
  width: '2000px',
  height: '1000px'
};


const center = {
  lat: 40.7831,
  lng: -73.9712
};


// add example map page
function MapPage() {

  // Set up hooks
  const [addrs, setAddrs] = React.useState(new Set());
  const [latlng, setLatLng] = React.useState(new Set());


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "APIKEY"
  })


  const [map, setMap] = React.useState(null);


  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    map.setZoom(14)
    fetchHousingData()
    setMap(map)
    
  }, [])
  
  const fetchHousingData = () => {
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({ nta: '', address: '' })
    };
    // get addresses from backend via get request
    fetch(SERVER + '/data', requestOptions)
    .then(response => response.json())
    .then(data => {
      setAddrs(data);
      var latLng = [];

      console.log(data)
      for (var i = 0; i < Object.keys(data.lat).length; i++){
        latLng[i] = [data.lat[i], data.long[i]];
      }
      setLatLng(latLng);
    });
  }; 

  // console.log(addrs.lat)
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  var marker;
  if (map && latlng){
    for (var count = 0; count < latlng.length; count++) {
        marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(latlng[count][0], latlng[count][1]),
        map: map,
      });
    }
  }

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
        initialCenter={{ lat: 40.7128, lng: -74.0060 }}
      >
      </GoogleMap>
  ) : <></>
}

export default MapPage;
