import React, { Component } from 'react';
import '../style/modules/App.css';

class Header extends Component {
render() {
  return (
    <div className="header">
      <div className="leftHeaderItem">
      <img src={require('../assets/logo.png')} alt="brewing-tech" height="42" width="42"/>
      <select className="selectValues">
        <option value="Yearly">Hourly</option>
        <option value="Monthly">Monthly</option>        
      </select>
      </div>
      <div className="rightHeaderItem">
      <a className="login-link" href="#">Login</a>
      </div>
    </div>  
  );
}
}

export default Header;