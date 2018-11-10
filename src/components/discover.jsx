import React from 'react';


class Discover extends React.Component {
  componentDidMount () {
    const options = {
      center: { lat: 37.797203, lng: -122.405630 }, // SF 
      zoom: 16,
      streetViewControl: false,
    }
    
    // this.map = new window.google.maps.Map(this.refs.map, options);
    new window.google.maps.Map(this.refs.map, options);
  }

  render () {
    return (
      <div>
        <div id="map-container" ref="map" />
      </div>
    )
  }
}

export default Discover;