export function fetchMessages() {
  return fetch('http://microblog-api.herokuapp.com/api/messages')
    .then(response => response.json())
}

export function postMessage(body) {
  return fetch('http://microblog-api.herokuapp.com/api/messages', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(body)
  })
}

