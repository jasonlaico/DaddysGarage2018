import React, { Component } from 'react';
import { InfoWindow } from 'react-google-maps';

export class PlaceInfoWindow extends Component {
  render() {
    console.log(this.props)

    const {description, name, price} = this.props
    return(
      <InfoWindow onCloseClick={this.props.closeWindow}>
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
          <span>${price}</span>
        </div>
      </InfoWindow>
    );
  }
}

export default PlaceInfoWindow;