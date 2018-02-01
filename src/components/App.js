import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/modules/App.css';
import Geolocation from './Geolocation.js';
import AutoCompleteSearch from './AutoCompleteSearch';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Geolocation/>
        <div style={{width: '100%', height: '400px'}}>
        </div>*/}
        <Header/>
        <AutoCompleteSearch/>
      </div>
    );
  }
}

export default App;
