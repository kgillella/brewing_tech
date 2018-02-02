import React, { Component } from 'react';
import '../style/modules/App.css';

class ParkingPlaces extends Component {
    render() {
      return ( 
        <div className="parking-page-wrapper">
           <div className="result-info-view left-container">
                    <div className="detail-panel">
                        <div className="detail-location-pic">
                            <img src="assets/locationpic.jpg" alt="" title="" />
                        </div>
                        <div className="detail-location-info">
                            <div className="reservation-heading">
                            <h4>Residential Yemlur Parking Lot</h4>
                            <input type="button" value="Book Now" classNameName="book-now-btn"/></div>
                            <p className="detail-address">
                                8th Main, 2nd cross road, Jayanagar
                            </p>
                            <div className="vehicle-option">
                                <select classNameName="vehicle-type">
                                    <option value="">Vehicle Type</option>
                                </select>
                                <div className="rate-card">
                                    <span>Rates per hour</span>
                                    <p>20 Rs/Hour</p>
                                </div>

                            </div>
                            
                            <div class="result-list-map"></div>
                            <div class="occupancy-section">
                                <h4>Occupancy</h4>

                                <div class="occupancy">
                                    <img src={require('../assets/airportShuttle.png')} alt="brewing-tech" height="42" width="42" />

                                </div>
                            </div>
                        </div>
</div></div>
        </div>

      );
    }
  }
  
  export default ParkingPlaces;