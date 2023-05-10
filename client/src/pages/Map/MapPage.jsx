import React from 'react'
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api';
import './MapPage.css'
import SideBar from '../../components/sidebar/sidebar';
import LargeCard from '../../components/largeCard/largeCard';

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
function MapPage(props) {
  // Set up hooks
  const [map, setMap] = React.useState(null);
  const [selectedElement, setSelectedElement] = React.useState(null);
  const [activeMarker, setActiveMarker] = React.useState(null);
  const [showInfoWindow, setInfoWindowFlag] = React.useState(true);
  const [modalOpen, setModalOpen] = React.useState(false);


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
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
        
  const closeModal = () => {
    setModalOpen(false);
  }

  const openModal = () => {
    setModalOpen(true);
  }
  
  return (
  <div className='container'>
    <SideBar openModal={openModal} setNta={props.setNta}></SideBar>
      <div className='mapContainer' style={{ height: '100vh', width: '100%' }}>{isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          onLoad={onLoad}
          onUnmount={onUnmount}
          initialCenter={{ lat: 40.7128, lng: -74.0060 }}
        >
        {props.markers.map(( obj, i ) => 
          <MarkerF position={{lat: obj.lat, lng: obj.long}} 
            key={i}
            title={i}
            onClick={(props, marker) => {
              setSelectedElement(obj);
              setActiveMarker(marker);
          }}
          />) }
        {selectedElement && (
          <InfoWindowF
            visible={showInfoWindow}
            marker={activeMarker}
            position={{lat: selectedElement.lat + 0.0015, lng: selectedElement.long}}
            onCloseClick={() => {
              setSelectedElement(null);
            }}
          >
            <div>
              <h1  style={{ color: 'black ' }}>{selectedElement.Notes}</h1>
            </div>
          </InfoWindowF>
        )}
        </GoogleMap>
  ) : <p>Loading...</p>}
  </div>
  <LargeCard opened={modalOpen} closeModal={closeModal}></LargeCard>
  </div>)
}

export default MapPage;
