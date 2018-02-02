import React, { Component } from 'react';
import '../style/modules/App.css';


class Dropdown extends Component {
  render() {
    return ( 
      <div className="Dropdown">
        <select className="vehicle-type">
           <option value="">Vehicle Type</option>
       </select>
      </div>
    );
  }
}

export default Dropdown;
