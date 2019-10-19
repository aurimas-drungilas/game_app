const baseURL = 'http://localhost:3000/api/play/'

export default {
  getPlay(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  postPlay(payload){
    return fetch(
      baseURL,
      {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
      }
    )
    .then(res => res.json());
  },
  putPlay(id, payload){
    return fetch(
      baseURL + id,
      {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
      }
    )
    .then(res => res.json());
  },
  deletePlay(id){
    return fetch(baseURL + id, {method: 'DELETE'});
  }
}
