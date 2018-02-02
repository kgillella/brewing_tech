import React, { Component } from 'react';
import '../style/modules/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

class ReservationSuccess extends Component {
  render() {
    return (
      <div className="ReservationSuccess">
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default ReservationSuccess;