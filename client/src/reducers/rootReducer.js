import { combineReducers } from 'redux'
import decks from './decksReducer'


const rootReducer = () => combineReducers({
  decks: decks
})
export default rootReducer
