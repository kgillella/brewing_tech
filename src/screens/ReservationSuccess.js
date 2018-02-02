import React, { Component } from 'react';
import '../style/modules/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParkingPlaces from '../components/ParkingPlaces'

class ReservationSuccess extends Component {
  render() {
    return (
      <div className="ReservationSuccess">
        <Header/>
        
        <ParkingPlaces/>
        <Footer/>
      </div>
    );
  }
}

export default ReservationSuccess;