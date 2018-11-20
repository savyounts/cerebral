import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import decksReducer from './reducers/decksReducer';
import cardsReducer from './reducers/cardsReducer'
import guessReducer from './reducers/guessReducer'
import roundReducer from './reducers/roundReducer'


const rootReducer = combineReducers({
  decks: decksReducer,
  cards: cardsReducer,
  round: roundReducer,
  guess: guessReducer
})

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer,
  compose(
    middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);


// store.dispatch(loadDecks()) use with api module

ReactDOM.render((


      <Provider store={store}>
        <App />
      </Provider>


), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
