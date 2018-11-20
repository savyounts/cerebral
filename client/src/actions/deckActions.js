import Axios from 'axios';

export function fetchDecks(){
  return (dispatch) => {
    dispatch({ type: 'LOADING_DECKS' })
      return fetch('http://localhost:3001/api/decks')
      .then(response => response.json())
      .then(decks =>  dispatch({type: 'FETCH_DECKS', payload: decks}))
    }
}

export const updateHighscore = (score, deckId) => ({type: "UPDATE_DECK_HIGHSCORE", deckId, score })

export const createDeck = (deckInfo, cards) => {
  return (dispatch) => {
    return Axios.post('http://localhost:3001/api/decks',
    deckInfo)
      .then(response => {dispatch({type: 'CREATE_DECK_SUCCESS', payload: response.data})
    return response.data})
      .catch(error => {
        throw(error);
      });
  };
};
