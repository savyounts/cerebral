export default function roundReducer(state = {}, action){
  switch(action.type){
    case 'CREATE_ROUND_SUCCESS':
      return action.payload

    case 'UPDATE_SCORE':
        const num = (action.guess.toLowerCase() === action.card.answer.toLowerCase()) ? 1 : 0
        return {...state, score:state.score + num}

    default:
        return state
  }
}
