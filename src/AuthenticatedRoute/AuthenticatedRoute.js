import React from 'react';
import { Redirect } from 'react-router';

function loggedIn() {
  return false;
}

export default function AuthenticatedRoute({children}){
  return loggedIn() ? (<Redirect to="/login"/>) : {children};
}
