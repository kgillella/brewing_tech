import React, { Component } from 'react';
import '../style/modules/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Error extends Component {
  render() {
    return (
      <div className="Error">
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default Error;