import React from 'react';
import { Redirect } from 'react-router';

export default function Logout() {
  window.localStorage.removeItem('name');
  return (<Redirect to="/login" />);
}
