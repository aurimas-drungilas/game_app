const baseURL = 'http://localhost:3000/api/game-stats/';

export default {
  get() {
    return fetch(baseURL)
    .then(res => res.json());
  },
  put(data) {
    return fetch('http://localhost:3000/api/bookings', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
