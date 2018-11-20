import React, { Component } from 'react';
import './App.css';
import Main from './components/Site/Main'
import {fetchDecks} from './actions/deckActions'
import {fetchCards} from './actions/cardActions'

import {connect} from 'react-redux'

class App extends Component {

componentDidMount(){
  this.props.fetchDecks()
  this.props.fetchCards()
}

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default connect(null, {fetchDecks, fetchCards})(App);
