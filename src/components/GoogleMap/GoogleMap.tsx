import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { GoogleApiKey } from '../../config';

const initialState = {
    center: {
      lat: 0,
      lng: 20
    },
    zoom: 0
  };

const GoogleMap:React.FC = ({ children, ...props }) => {
     const [mapProps, _] = useState(()=>initialState)

    return (
        <div>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: GoogleApiKey,
                }}
                defaultCenter={mapProps.center}
                defaultZoom={mapProps.zoom}
                {...props}
            >
                {children}
            </GoogleMapReact>
        </div>
    );
};

GoogleMap.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

GoogleMap.defaultProps = {
  children: null,
};

export default GoogleMap;