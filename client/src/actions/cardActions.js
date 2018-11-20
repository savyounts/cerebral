import Axios from 'axios';

export function fetchCards(){
  return (dispatch) => {
    dispatch({ type: 'LOADING_CARDS' })
      return fetch('http://localhost:3001/api/cards')
      .then(response => response.json())
      .then(cards =>  dispatch({type: 'FETCH_CARDS', payload: cards}))
    }
}


export const createCard = (card, deckId) => {
  return (dispatch) => {
    return Axios.post('http://localhost:3001/api/cards',
    {deck_id: deckId, question: card.question, answer: card.answer, hint:card.hint})
    .then(response => {
         dispatch( {type: 'CREATE_CARD_SUCCESS', payload: response.data}) })
    .catch(error => {
        throw(error);
    });
  };
};
