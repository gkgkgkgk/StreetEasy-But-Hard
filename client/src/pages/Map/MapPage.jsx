import React from 'react'
import { useMemo } from 'react'
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api';
import './MapPage.css'
import SideBar from '../../components/sidebar/sidebar';
import LargeCard from '../../components/largeCard/largeCard';
import Info from './Info';
import cancel from './cancel.png';

var SERVER = "http://localhost:5000"
const containerStyle = {
  width: '100%',
  height: '100%',
  minWidth: '100px'
};




// add example map page
function MapPage(props) {
  // let center = {
  //   lat: 40.7831,
  //   lng: -73.9712
  // };
  

  // Set up hooks
  const [map, setMap] = React.useState(null);
  const [selectedElement, setSelectedElement] = React.useState(null);
  const [activeMarker, setActiveMarker] = React.useState(null);
  const [showInfoWindow, setInfoWindowFlag] = React.useState(true);
  const [modalOpen, setModalOpen] = React.useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });

  // const center = useMemo(() => ({ lat: 40.7831, lng: -73.9712 }), []);
  const center = useMemo(() => ({ lat: props.center[0], lng: props.center[1] }), []);

  const icon = {
    // url: 'https://www.pngarts.com/files/12/Cancel-Button-Icon-PNG-Image.png',
    image: cancel,
    fillColor: '#64be68',
    fillOpacity: 1,
    scale: 0.05
   };

        
  const closeModal = () => {
    setModalOpen(false);
  }

  const openModal = () => {
    setModalOpen(true);
  }
  
  return (
  <div className='container'>
    <SideBar openModal={openModal} setNta={props.setNta}></SideBar>
      <div className='mapContainer' style={{ height: '100vh', width: '100%' }}>{isLoaded && props.center != [40.7831, -73.9712] ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          // onLoad={onLoad}
          // onUnmount={onUnmount}
          initialCenter={{ lat: 40.7128, lng: -74.0060 }}
        >
        {props.markers.map(( obj, i ) => 
          <MarkerF position={{lat: obj.lat, lng: obj.long}} 
            key={i}
            title={i}
            // icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
            icon={cancel}
            // icon={cancel}
            // icon={icon}
            onClick={(props, marker) => {
              setSelectedElement(obj);
              setActiveMarker(marker);
          }}
          />) }
        {selectedElement && (
          <InfoWindowF
            visible={showInfoWindow}
            marker={activeMarker}
            position={{lat: selectedElement.lat, lng: selectedElement.long}}
            onCloseClick={() => {
              setSelectedElement(null);
            }}
            options= {{maxWidth : 500 }}
          >
            <Info element={selectedElement}></Info>
          </InfoWindowF>
        )}
        </GoogleMap>
  ) : <p>Loading...</p>}
  </div>
  <LargeCard opened={modalOpen} closeModal={closeModal}></LargeCard>
  </div>)
}

export default MapPage;
