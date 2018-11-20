import { combineReducers } from 'redux'
import decksReducer from './decksReducer';
import cardsReducer from './cardsReducer'
import guessReducer from './guessReducer'
import roundReducer from './roundReducer'
//
const rootReducer = combineReducers({
  decks: decksReducer,
  cards: cardsReducer,
  round: roundReducer,
  guess: guessReducer
})

export default rootReducer
