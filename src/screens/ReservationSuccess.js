import React, { Component } from 'react';
import '../style/modules/App.css';
import Header from '../components/Header';
import FilterTab from '../components/FilterTab';
import Footer from '../components/Footer';
import ParkingPlaces from '../components/ParkingPlaces';
import DrawMap from '../components/DrawMap';

class ReservationSuccess extends Component {
  render() {
    return (
      <div className="ReservationSuccess">
        <Header/>
        <FilterTab/>
        <ParkingPlaces/>
        <Footer/>
      </div>
    );
  }
}

export default ReservationSuccess;