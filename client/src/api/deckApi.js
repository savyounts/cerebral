class DeckApi {
  static getAllDecks() {
    return fetch('http://localhost:3001/api/decks',{
    mode: 'no-cors',
    headers:{
    'Access-Control-Allow-Origin':'*'
    }})
    .then(response => response.json())
    .catch(error => error)
  }
}
export default DeckApi
