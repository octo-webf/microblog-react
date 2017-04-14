export function isAuthenticated() {
  return !!window.localStorage.getItem('name');
}

export function authenticate(name) {
  window.localStorage.setItem('name', name);
}

export function logout() {
  window.localStorage.removeItem('name');
}
