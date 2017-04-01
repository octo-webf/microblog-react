import React from 'react';
import { Redirect } from 'react-router';

function loggedIn() {
  return true;
}

export default function AuthenticatedRoute({ children }) {
  return loggedIn() ? children : (<Redirect to="/login" />);
}

AuthenticatedRoute.propTypes = {
  children: React.PropTypes.element.isRequired,
};
