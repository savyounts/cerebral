 export default function cardsReducer(state = [], action){
   switch(action.type){
     case 'LOADING_CARDS':
       return [...state]

     case 'FETCH_CARDS':
      return action.payload

     case 'CREATE_CARD_SUCCESS':
        return [...state, action.payload]

     default:
         return state
   }
 }
