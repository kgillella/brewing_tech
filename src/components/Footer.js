import React, { Component } from 'react';
import '../style/modules/App.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <footer>
                <div className="footer-logo">
                    <a href="#" title="ParkIt"></a>
                </div>
                <div className="footer-content">
                    <p>© Copyright 2018 Parkit. All Rights Reserved. </p>
                </div>
            </footer>
      </div>
    );
  }
}

export default Footer;