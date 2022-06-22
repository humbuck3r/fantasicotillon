import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import '../Contact/Contact.css'
const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: -32.92887,
  lng: -68.85623
};

function Contact() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDTwa18LoExfodf04mMPOdc6WrvajqiPbE"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
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
        center={{lat: -32.92897,
            lng: -68.85619,}}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
        
      >
        
        { <Marker lat={-32.92897}
            lng={-68.85619}
            name="My Marker"
            color="blue" />/* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
      
        
      
  ) : <></>
}

export default React.memo(Contact)