const baseURL = 'http://localhost:3000/api/game-stats/';

export default {
  get(){
    return fetch(baseURL)
    .then(res => res.json());
  },
}
