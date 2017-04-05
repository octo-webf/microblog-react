import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute';
import App from '../App/App';
import About from '../About/About';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';

export default () => (
  <HashRouter hashType="slash">
    <div>
      <Route exact path="/" render={() => <AuthenticatedRoute><App /></AuthenticatedRoute>} />
      <Route path="/about" render={() => <AuthenticatedRoute><About /></AuthenticatedRoute>} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
    </div>
  </HashRouter>
);
