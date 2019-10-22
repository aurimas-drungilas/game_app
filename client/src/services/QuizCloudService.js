const baseURL = 'http://localhost:3000/api/quiz-cloud/';

export default {
  get(){
    return fetch(baseURL)
    .then(res => res.json());
  },
}
