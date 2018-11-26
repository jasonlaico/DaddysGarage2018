import store from '../../redux/store';
// import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import "./Map.css"
import { withScriptjs, withGoogleMap, GoogleMap, Marker,InfoWindow } from "react-google-maps";
// import map_pin_icon from '/map-pin.png'
const { StandaloneSearchBox } = require("react-google-maps/lib/components/places/StandaloneSearchBox");

class Map extends Component {
    constructor() {
        super();
        this.state = {
            currentListing: {},
            selectedMarker: null,
            map: null,
            searchBox: null,
            center: {
                lat: 32.8751097,
                lng:-97.0008255
            }
        }
    }


    mapMoved() {
        console.log('mapMoved: ' + JSON.stringify(this.state.map.getCenter()))
    }

    mapLoaded(map) {
        if (this.state.map != null) {
            return
        }
        this.setState({
            map: map
        })
    }

    zoomChanged() {
        console.log('zoomChanged:' + this.state.map.getZoom())
    }

    onSearchBoxMounted(searchBox) {
        if (this.state.searchBox !== null) {
            return;
        }
        this.setState({
            searchBox: searchBox
        })
    }

    onPlacesChanged() {
        const places = this.state.searchBox.getPlaces();

        this.setState({
            center: {
                lat: places[0].geometry.location.lat(),
                lng: places[0].geometry.location.lng()
            }
        })
    }

    markerOnClickHandler(marker){
        this.setState({selectedMarker: marker.id})
        this.setState({currentListing: marker})
    }

    handleDetails(){
        store.dispatch({
            type: "UPDATE_CURRENT_LISTING",
            payload: this.state.currentListing
        })
    }

    render() {
        const markers = this.props.markers;
        return (
        <div>
            <div>
                <StandaloneSearchBox
                    ref={this.onSearchBoxMounted.bind(this)}
                    bounds={this.props.bounds}
                    onPlacesChanged={this.onPlacesChanged.bind(this)}
                >
                <input
                    type="text"
                    placeholder="Search for tools near you"
                    className='search'
                />
                </StandaloneSearchBox>
                <GoogleMap
                    onZoomChanged={this.zoomChanged.bind(this)}
                    ref={this.mapLoaded.bind(this)}
                    onDragEnd={this.mapMoved.bind(this)}
                    defaultZoom={this.props.zoom}
                    center={this.state.center}
                >
                    {markers.map((marker, i) => (
                        <Marker
                        key = {i}
                        {...marker} 
                        position = {this.props.markers[i]}
                        // icon = {map_pin_icon}
                        onClick = {(e)=>this.markerOnClickHandler(marker)}
                        >
                      {
                        this.state.selectedMarker===marker.id?
                            <InfoWindow>
                                <div>
                                <span>${marker.hour_price.toFixed(2)}</span>
 
                                </div>
                                </InfoWindow>
                                :''
                                
                      } 
                        </Marker>
                        )
                    )}
                </GoogleMap>
            </div>
            <div className='searchcard'>
                <h2 >Listing Info</h2>
                <hr/>
                <div >
                    <p >Brand:  
                     {this.state.currentListing.brand}</p>
                </div> 
                <div >
                    <p >Model:{this.state.currentListing.model}</p>
                </div> 
                <div >
                    <p >Hour Price: ${this.state.currentListing.hour_price && this.state.currentListing.hour_price.toFixed(2)}</p>
                </div> 
            {/* <div className='searchcard'>
                <h1 style={{textAlign:'center', padding:'8px 0 0 0'}}>Listing Info</h1>
                <hr/>
                <div style={{width:'200px' ,height:'40px'}}>
                    <p style={{flexbox:'left'}}>Brand:  
                     {this.state.currentListing.brand}</p>
                </div> <br></br>
                <div style={{width:'200px' ,height:'40px'}}>
                    <p style={{flexbox:'left'}}>Model:</p>
                    <p style={{flexbox:'right'}}>{this.state.currentListing.model}</p>
                </div> <br></br>
                <div style={{width:'200px' ,height:'40px'}}>
                    <p style={{flexbox:'left'}}>Hour Price: </p>
                    <p style={{flexbox:'right'}}>${this.state.currentListing.hour_price && this.state.currentListing.hour_price.toFixed(2)}</p>
                </div>  */}
                {/* <Link to = "/listing">
                <button className='smallbutton'style={{margin:'0 0 10px 0'}} onClick ={(e) => {this.handleDetails()}}>Details</button>
                </Link> */}
            </div>
        </div>
        );
    }
};


export default withScriptjs(withGoogleMap(Map));
