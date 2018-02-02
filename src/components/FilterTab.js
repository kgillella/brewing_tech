import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/modules/App.css';

class FilterTab extends Component {
    render() {
      return (
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
                            <div class="sort-section">
                                <label>Sort By<span className="sort-icon"></span></label>
                            </div>
                        </div>
                    </div>
                </div>
                 );
                }
              }
export default FilterTab;