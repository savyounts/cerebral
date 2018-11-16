export default function deckReducer(state = {loading:false, decks: []}, action){
  switch(action.type){
    case 'LOADING_DECKS':
      return {...state, loading:true}

    case 'FETCH_DECKS':
      return {...state, decks: action.payload, loading:false}

    default:
        return state
  }
}
