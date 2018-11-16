import Axios from 'axios';

export const createGuess = (state, round) => {
  return (dispatch) => {
    return Axios.post('http://localhost:3001/api/guesses', {card_id: state.card.id, round_id: round.id, response: state.response})
      .then(response => { dispatch({type: 'CREATE_GUESS_SUCCESS', payload: response.data}) })
      .catch(error => {
        throw(error);
      });
  };
};
