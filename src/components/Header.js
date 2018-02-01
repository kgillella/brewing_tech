import React, { Component } from 'react';
import '../style/modules/App.css';

class Header extends Component {
render() {
  return (
    <div className="Header">
      <div className="left-header-item">
      <img src="brewing.svg" alt="brewing-tech" height="42" width="42"/>
      <select>
        <option value="Yearly">Yearly</option>
        <option value="Monthly">Monthly</option>        
      </select>
      </div>
    </div>
  );
}
}

export default Header;