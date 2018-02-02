import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import './style/index.css';
import App from './screens/App';
import registerServiceWorker from './registerServiceWorker';
import SearchLandingPage from './screens/SearchLandingPage';
import ReservationSuccess from './screens/ReservationSuccess';
import Error from './screens/Error';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/searchResult" component={SearchLandingPage}/>
        <Route path="/reservationConfirmation" component={ReservationSuccess}/>
        <Route path="/error" component={Error}/>
    </Router>,
  document.getElementById('root')
);

