export default function guessReducer(state = '', action){
  switch(action.type){
    case 'CREATE_GUESS_SUCCESS':
      return action.payload

    default:
      return state
  }
}
