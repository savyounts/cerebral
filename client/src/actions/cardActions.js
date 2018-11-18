import Axios from 'axios';

export const createCard = (card) => {
  return (dispatch) => {
    return Axios.post('http://localhost:3001/api/cards',
    {deck_id: card.deckId, quesiton: card.question, answer: card.answer, hint:card.hint})
      .then(response => { dispatch({type: 'CREATE_CARD_SUCCESS', payload: response.data}) })
      .catch(error => {
        throw(error);
      });
  };
};
