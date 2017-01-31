import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Home from './Home';
import App from './App';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
      <Route path="/" component={Home}/>
      <Route path="/app" component={App}/>

      {/*<Route path="*" component={NoMatch}/>*/}
  </Router>
  ),
  document.getElementById('root')
);


