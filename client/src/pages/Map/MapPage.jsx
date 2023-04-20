// const MapPage = () => {
//     return <div><h1>Map Page goes here...</h1></div>;
// };

import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

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
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "APIKEY"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
        
        {/* Example map marker on starting pin right now.. */}
        <Marker key="marker_1"

        position={{
            lat: 40.7831,
            lng: -73.9712
        }}

        />
      </GoogleMap>
  ) : <></>
}

export default MapPage;