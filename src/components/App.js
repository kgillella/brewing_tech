import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/modules/App.css';
import Geolocation from './Geolocation.js';
import DrawMap from './DrawMap';
import AutoCompleteSearch from './AutoCompleteSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Geolocation/>
        <div style={{width: '100%', height: '400px'}}>
        </div>*/}
        <DrawMap/>
        <AutoCompleteSearch/>
      </div>
    );
  }
}

export default App;
