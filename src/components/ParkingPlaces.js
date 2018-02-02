import React, { Component } from 'react';
import '../style/modules/App.css';



class ParkingPlaces extends Component {
    render() {
      return ( 
        <div className="parking-page-wrapper">
          
            <section className="park-results-list">
                <div className="park-result-header-wrap">
                    <div className="park-result-header">
                        <div className="result-info">
                            <p className="result-info-text">Showing 4 results for immediate parking in: </p>
                            <ul>
                                <li><label>Indiranagar</label><a>X</a></li>
                                <li><label>Car Parking</label><a>X</a></li>
                            </ul>
                        </div>
                        <div className="park-filters">
                            <div className="add-filter-section">
                                <label><span className="filter-icon"></span>Add Filters</label>
                            </div>
                           
                            <div className="sort-section">
                                <label>Sort By<span className="sort-icon"></span></label>
                            </div>
                        </div>
                    </div>
                </div>
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
                            
                        </div>
                        <div className="result-list-map"></div>
                        <div className="occupancy-section">
                        <h4>Occupancy</h4>
                        </div>
                    </div>
                    
                </div>
            </section>
          
        </div>

      );
    }
  }
  
  export default ParkingPlaces;
  
