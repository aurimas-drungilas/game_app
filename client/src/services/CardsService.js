const baseURL = 'http://localhost:3000/api/cards/';

export default {
  get(){
    return fetch(baseURL)
    .then(res => res.json());
  },
}
