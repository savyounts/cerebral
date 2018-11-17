export default function deckReducer(state = {loading:false, decks: [], round: '', guess:''}, action){
  switch(action.type){
    case 'LOADING_DECKS':
      return {...state, loading:true}

    case 'FETCH_DECKS':
      return {...state, decks: action.payload, loading:false}

      case 'CREATE_ROUND_SUCCESS':
        return {...state, round:action.payload }

      case 'UPDATE_SCORE':
          const num = (action.guess === action.card.answer) ? 1 : 0
          return {...state, round:{...state.round, score:state.round.score + num }}

      case 'CREATE_GUESS_SUCCESS':
        return {...state, guess:action.payload }

    default:
        return state
  }
}
