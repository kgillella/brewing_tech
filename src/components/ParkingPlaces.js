import React, { Component } from 'react';
import '../style/modules/App.css';



class ParkingPlaces extends Component {
    render() {
      return ( 
        <div class="parking-page-wrapper">
          
            <section class="park-results-list">
                <div class="park-result-header-wrap">
                    <div class="park-result-header">
                        <div class="result-info">
                            <p class="result-info-text">Showing 4 results for immediate parking in: </p>
                            <ul>
                                <li><label>Indiranagar</label><a>X</a></li>
                                <li><label>Car Parking</label><a>X</a></li>
                            </ul>
                        </div>
                        <div class="park-filters">
                            <div class="add-filter-section">
                                <label><span class="filter-icon"></span>Add Filters</label>
                            </div>
                           
                            <div class="sort-section">
                                <label>Sort By<span class="sort-icon"></span></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="result-info-view left-container">
                    <div class="detail-panel">
                        <div class="detail-location-pic">
                            <img src="assets/locationpic.jpg" alt="" title="" />
                        </div>
                        <div class="detail-location-info">
                            <div class="reservation-heading">
                            <h4>Residential Yemlur Parking Lot</h4>
                            <input type="button" value="Book Now" className="book-now-btn"/></div>
                            <p class="detail-address">
                                8th Main, 2nd cross road, Jayanagar
                            </p>
                            <div class="vehicle-option">
                                <select className="vehicle-type">
                                    <option value="">Vehicle Type</option>
                                </select>
                                <div class="rate-card">
                                    <span>Rates per hour</span>
                                    <p>20 Rs/Hour</p>
                                </div>
                            </div>
                            
                        </div>
                        <div class="occupancy-section"></div>
                    </div>
                    <div class="result-list-map"></div>
                </div>
            </section>
          
        </div>

      );
    }
  }
  
  export default ParkingPlaces;
  
