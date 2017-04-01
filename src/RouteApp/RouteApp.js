import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute';
import App from '../App/App';
import About from '../About/About';
import Login from '../Login/Login';

export default () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" render={() => <AuthenticatedRoute><App /></AuthenticatedRoute>} />
      <Route path="/about" render={() => <AuthenticatedRoute><About /></AuthenticatedRoute>} />
      <Route path="/login" component={Login} />
    </div>
  </BrowserRouter>
);
