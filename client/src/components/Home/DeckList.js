import React from 'react'
import Deck from './Deck'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'


class Decks extends React.Component{



  render(){
    let DeckWithRouter = withRouter(Deck)
  return(
    <div className="decks-container">
      <h1>{this.props.decks.length}<br></br> Study Sets and Counting.</h1><br></br>
      <div className="card-deck">
        {this.props.decks.map(deck => <DeckWithRouter key={deck.id} deck={deck}/>)}
      </div>
    </div>
  )}
}

const mapStateToProps = state => {
  return {decks: state.decks}
}

export default connect(mapStateToProps)(Decks)
