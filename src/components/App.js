import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/modules/App.css';
import Geolocation from './Geolocation.js';
import AutoCompleteSearch from './AutoCompleteSearch';
import Header from './Header';
import AppTabs from './AppTabs';

import Result from './Result';


class App extends Component {
  render() {
    return ( 
      <div className="App">
        {/*<Geolocation/>
        <div style={{width: '100%', height: '400px'}}>
        </div>*/}
        <Header/>
        <AppTabs/>
      </div>
    );
  }
}

export default App;
