import React, { Component } from 'react';
import './App.css';
import Main from './components/Site/Main'
import {fetchDecks} from './actions/deckActions'
import {connect} from 'react-redux'

class App extends Component {

componentDidMount(){
  this.props.fetchDecks()
}

  render() {
    return (
      <div>
        <Main decks={this.props.decks}/>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {decks: state.decks}
// }

export default connect(null, {fetchDecks})(App);
