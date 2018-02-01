import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import './style/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import DrawMap from './components/DrawMap';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/searchResult" component={DrawMap}/>
    </Router>,
  document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
