import React, { Component } from 'react';
import '../style/modules/App.css';

class Header extends Component {
render() {
  return (
    <div className="header">
      <div className="leftHeaderItem">
      <img src={require('../assets/logo.png')} alt="brewing-tech" />
      <select className="selectValues">
        <option value="Bangalore">Bangalore</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Hyd">Hyd</option>
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