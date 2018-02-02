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
                                <input type="button" value="Book Now" classNameName="book-now-btn" /></div>
                            <p className="detail-address">
                                8th Main, 2nd cross road, Jayanagar
                            </p>
                            <div className="vehicle-option">
                                <select classNameName="vehicle-type-reservation"> 
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
                                    <img src={require('../assets/airportShuttle.png')} alt="brewing-tech"  />
                                    <img src={require('../assets/Bike_Black.png')} alt="brewing-tech"  />
                                    <img src={require('../assets/Scooter_Black.png')} alt="brewing-tech"  />
                                    <img src={require('../assets/Truck_Black.png')} alt="brewing-tech"  />

                                </div>
                            </div>
                            <div class="result-list-map"></div>
                            <div class="facilities-section">
                                <h4>Facilities</h4>

                                <div class="">
                                   <div class="facilities">
                                    <img src={require('../assets/car-washing.png')} alt="brewing-tech"  /><span>Car Wash</span></div>
                                   <div class="facilities"> <img src={require('../assets/charge.png')} alt="brewing-tech"  /><span>Electronic Vehicle Charging</span></div>
                                   <div class="facilities"> <img src={require('../assets/disabled-sign.png')} alt="brewing-tech"  /><span>Handicap Services</span></div>
                                  

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                );
    }
}

export default ParkingPlaces;