import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Home from './Home';
import App from './App';
import './index.css';
import Register from './RegisterComponent'
import SignIn from './SignInComponent'


ReactDOM.render((
  <Router history={browserHistory}>
      <Route path="/" component={Home}/>
      <Route path="/app" component={App}/>
      <Route path="/register" component={Register}/>
      <Route path="/sign-in" component={SignIn}/>


      {/*<Route path="*" component={NoMatch}/>*/}
  </Router>
  ),
  document.getElementById('root')
);


