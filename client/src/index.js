import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {loadDecks} from './actions/deckActions';

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer,
  compose(
    middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);


// store.dispatch(loadDecks()) use with api module

ReactDOM.render((
  <BrowserRouter>
    <React.Fragment>
      <Provider store={store}>
        <App />
      </Provider>
  </React.Fragment>
  </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
