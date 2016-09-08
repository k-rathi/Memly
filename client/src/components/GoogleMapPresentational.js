import React, { PropTypes, Component } from 'react'
import GoogleMap from 'google-map-react'
import GoogleMapMemlyContainer from '../containers/GoogleMapMemlyContainer';
// import shallowCompare from 'react-addons-shallow-compare'
// import controllable from 'react-controllables'

const GoogleMapPresentational = (props) => {
  const memlys = props.memlys.map((memly, index) => {
    const { showInfo, defaultAnimation, photo } = memly;
    return (
      <GoogleMapMemlyContainer
        // Represent other peoples' memlys
        photo={photo}
        defaultAnimation={defaultAnimation}
        showInfo={showInfo}
        {...memly.position}
        // text={index.toString()}
        key={index}
      />
    )
  });

  return (
      <div className="map">
       <GoogleMap
        /*
         * Using the ES6 spread syntax (...) below, the following props will be passed from the
         * GoogleMapPresentational component into the GoogleMap component:
         * * onChildMouseEnter={(e)=>{console.log(e)}} // event argument will return index of child 
           * onClick={(e)=>{console.log(e)}} // event will show lat long on map
           * options={{styles: mapStyle}}
           * bootstrapURLKeys={{key: 'AIzaSyA0VOMMs7FVCwz_klHsvs_KFt-CV-YbVNc'}}
           * center={props.center}
           * zoom={props.zoom}
           * * Instead of css hover (which sometimes is "bad" for map markers)
             * ("bad" means inability to hover on markers placed under other markers)
             * you can use internal GoogleMap component hover algorithm
           * * Hover algorithm explained at "x_distance_hover" example
           * hoverDistance={K_SIZE}
           */
          {...props}
        >
        <GoogleMapMemlyContainer
          // Represent user current location
          representUserCurrentLocation={true}
          lat={props.center[0]}
          lng={props.center[1]}
          // text={'M'}
        />
        {memlys}
      </GoogleMap>
    </div>
  );
}

export default GoogleMapPresentational