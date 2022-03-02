import GoogleMapReact from 'google-map-react';
import { GoogleApiKey } from '../../config';

import React, { useState } from 'react'
const initialState = {
    center: {
      lat: 0,
      lng: 20
    },
    zoom: 0
  };


const SimpleMap = () => {
 const [mapProps, _] = useState(()=>initialState)

  return (
    <div>    
         <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: GoogleApiKey}}
      defaultCenter={mapProps.center}
      defaultZoom={mapProps.zoom}
    >
    </GoogleMapReact>
  </div>
  </div>
  )
}

export default SimpleMap