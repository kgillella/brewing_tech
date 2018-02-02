import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/modules/App.css';
import Geolocation from '../components/Geolocation.js';
import AutoCompleteSearch from '../components/AutoCompleteSearch';
import Header from '../components/Header';
import AppTabs from '../components/AppTabs';
import Result from '../components/Result';
import Footer from '../components/Footer';


class App extends Component {
  render() {
    return ( 
      <div className="App">
        <Header/>
        <AppTabs/>
        <Footer/>
      </div>
    );
  }
}

export default App;
