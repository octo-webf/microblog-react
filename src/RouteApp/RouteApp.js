import React from 'react';
import createHashHistory from 'history/lib/createBrowserHistory';
import { Router, Route } from 'react-router';
import App from '../App/App';
import About from '../About/About';
import Login from '../Login/Login';
import { requireAuth } from './RouteService';

export default () => (
  <Router history={createHashHistory()}>
    <Route path="/" component={App} onEnter={requireAuth} />
    <Route path="about" component={About} />
    <Route path="login" component={Login} />
  </Router>
);
