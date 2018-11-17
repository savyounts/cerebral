import Axios from 'axios';

export const createRound = (state) => {
  return (dispatch) => {
    return Axios.post('http://localhost:3001/api/rounds', {username: state.response, deck_id: state.deck.id})
      .then(response => { dispatch({type: 'CREATE_ROUND_SUCCESS', payload: response.data}) })
      .catch(error => {
        throw(error);
      });
  };
};
