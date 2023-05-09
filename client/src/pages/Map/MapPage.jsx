import React from 'react'
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api';
import './MapPage.css'
import SideBar from '../../components/sidebar/sidebar';

var SERVER = "http://localhost:5000"
const containerStyle = {
  width: '100%',
  height: '100%',
  minWidth: '100px'
};


const center = {
  lat: 40.7831,
  lng: -73.9712
};


// add example map page
function MapPage(markers) {
  // Set up hook
  const [map, setMap] = React.useState(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBHM4fruUWmgBCv7HxaeRlJ_jI3KHkIhMk"
  })


  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.setZoom(14)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  
  return (
  <div className='container'>
    <SideBar></SideBar>
      <div className='mapContainer' style={{ height: '100vh', width: '100%' }}>{isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          onLoad={onLoad}
          onUnmount={onUnmount}
          initialCenter={{ lat: 40.7128, lng: -74.0060 }}
        >
        {markers.markers.map(( {lat, long: lng} ) => <MarkerF position={{lat, lng}}/>) }
        </GoogleMap>
  ) : <p>Loading...</p>}
  </div>
  </div>)
}

export default MapPage;
