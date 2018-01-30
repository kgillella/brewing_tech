import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../style/modules/App.css';

  class DrawMap extends React.Component {
    static defaultProps = {
      center: {lat: 12.9442212, lng:77.6936836},
      zoom: 11
    };

    renderMarkers(map, maps) {
        let marker = new maps.Marker({
          position: {lat: 12.9442212, lng: 77.6936836},
          map,
          title: 'Hello World!'
        });
      }
  
    render() {
      return (
        <div className="mapHolder">
         <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
        >
        </GoogleMapReact>
        </div>
      );
    }
  }
  export default DrawMap;
  