import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../App/App';
import About from '../About/About';
import Login from '../Login/Login';
import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute';

export default () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" render={() => <AuthenticatedRoute><App /></AuthenticatedRoute>} />
      <Route path="/about" component={About}/>
      <Route path="/login" component={Login}/>
    </div>
  </BrowserRouter>
);
