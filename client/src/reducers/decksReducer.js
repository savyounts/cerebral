export default function deckReducer(state = [], action){
  switch(action.type){
    case 'LOADING_DECKS':
      return [...state]

    case 'FETCH_DECKS':
      return action.payload

    case 'CREATE_DECK_SUCCESS':
    console.log('now im in redux')
      return [...state, action.payload]

    case 'CREATE_CARD_SUCCESS':
      const deck = state.findIndex(deck => deck.id === action.payload.deck_id)
      return [...state.slice(0, deck),{
        ...state[deck],
        cards: [...state[deck].cards, action.payload]},
        ...state.slice(deck + 1)]

    default:
        return state
  }
}
