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


var locations = [[40.77084, -73.952721], 
            [40.774093, -73.953283],
            [40.770639, -73.949348],
            [40.677081, -73.890259],
            [40.655486, -73.95256],
            [40.696796, -73.931728]]


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
    googleMapsApiKey: "AIzaSyDR4uw4APdwKIZhj6wH8DIHpDlQCw67XLQ"
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


// import React, { useState } from "react";
// import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";

// const markers = [
//   {
//     id: 1,
//     name: "Chicago, Illinois",
//     position: { lat: 41.881832, lng: -87.623177 }
//   },
//   {
//     id: 2,
//     name: "Denver, Colorado",
//     position: { lat: 39.739235, lng: -104.99025 }
//   },
//   {
//     id: 3,
//     name: "Los Angeles, California",
//     position: { lat: 34.052235, lng: -118.243683 }
//   },
//   {
//     id: 4,
//     name: "New York, New York",
//     position: { lat: 40.712776, lng: -74.005974 }
//   }
// ];

// function Map() {
//   const [activeMarker, setActiveMarker] = useState(null);

//   const handleActiveMarker = (marker) => {
//     if (marker === activeMarker) {
//       return;
//     }
//     setActiveMarker(marker);
//   };

//   const handleOnLoad = (map) => {
//     const bounds = new window.google.maps.LatLngBounds();
//     markers.forEach(({ position }) => bounds.extend(position));
//     map.fitBounds(bounds);
//   };

//   return (
//     <GoogleMap
//       onLoad={handleOnLoad}
//       onClick={() => setActiveMarker(null)}
//       mapContainerStyle={{ width: "100vw", height: "100vh" }}
//     >
//       {markers.map(({ id, name, position }) => (
//         <Marker
//           key={id}
//           position={position}
//           onClick={() => handleActiveMarker(id)}
//         >
//           {activeMarker === id ? (
//             <InfoWindow onCloseClick={() => setActiveMarker(null)}>
//               <div>{name}</div>
//             </InfoWindow>
//           ) : null}
//         </Marker>
//       ))}
//     </GoogleMap>
//   );
// }

// export default Map;
