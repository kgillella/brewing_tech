import React, { Component } from 'react';
import '../style/modules/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Result from '../components/Result';
import DrawMap from '../components/DrawMap';
import FilterTab from '../components/FilterTab';

class SearchLandingPage extends Component {
  render() {
    return (
      <div className="SearchLandingPage">
        <Header/>
        <FilterTab/>
        <div className="result-list-view">
            <Result/>
        </div>
        <div className="result-list-map">
            <DrawMap/>
        </div>
        
      </div>
    );
  }
}

export default SearchLandingPage;