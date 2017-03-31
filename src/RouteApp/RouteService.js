function loggedIn() {
  return false;
}

export default function requireAuth(nextState, replace) {
  if (!loggedIn()) {
    replace({
      pathname: '/login',
    });
  }
}
