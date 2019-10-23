const baseURL = 'http://localhost:3000/api/game-stats/';


export default {
  get() {
    return fetch(baseURL)
    .then(res => res.json());
  },
  put(data) {
    const id = data._id;

    return fetch(baseURL + id, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
