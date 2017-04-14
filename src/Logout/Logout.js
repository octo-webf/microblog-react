import React from 'react';
import { Redirect } from 'react-router';
import { logout } from '../AuthenticationService/AuthenticationService';

export default function Logout() {
  logout();
  return (<Redirect to="/login" />);
}
