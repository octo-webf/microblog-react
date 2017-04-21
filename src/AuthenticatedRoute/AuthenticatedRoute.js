import React from 'react';
import { Redirect } from 'react-router';
import { isAuthenticated } from '../AuthenticationService/AuthenticationService';

export default function AuthenticatedRoute({ children }) {
  return isAuthenticated() ? children : (<Redirect to="/login" />);
}

AuthenticatedRoute.propTypes = {
  children: React.PropTypes.element.isRequired,
};
