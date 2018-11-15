export function fetchDecks(){
  return (dispatch) => {
    dispatch({ type: 'LOADING_DECKS' })
      return fetch('http://localhost:3001/api/decks')
      .then(response => response.json())
      .then(decks =>  dispatch({type: 'FETCH_DECKS', payload: decks}))
    }
}



// import deckApi from '../api/deckApi'
// using API module
// export function loadDecks() {
//   return function(dispatch) {
//     return deckApi.getAllDecks().then(decks => {
//       dispatch(loadDecksSuccess(decks));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }
//
// export function loadDecksSuccess(decks){
//   return {type:'LOAD_DECKS_SUCCESS', decks}
// }
