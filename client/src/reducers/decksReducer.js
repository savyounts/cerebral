export default function deckReducer(state = {loading:false, decks: [], round: '', guess:''}, action){
  switch(action.type){
    case 'LOADING_DECKS':
      return {...state, loading:true}

    case 'FETCH_DECKS':
      return {...state, decks: action.payload, loading:false}

      case 'CREATE_ROUND_SUCCESS':
      console.log(`im from current round ${{...state, round:action.payload }}`)
        return {...state, round:action.payload }

      case 'CREATE_GUESS_SUCCESS':
        return {...state, guess:action.payload }

    default:
        return state
  }
}
