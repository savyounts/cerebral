import React from 'react'


class Deck extends React.Component{

  handleClick = e =>{
    this.props.history.push(`/decks/${this.props.deck.id}`)
  }

  render(){

  return(
    <React.Fragment>
      <div className="deck-div" onClick={this.handleClick}>
        <header className="top-info">
          <span>{this.props.deck.cards.length} terms</span> <span className="username">HighScore: {this.props.deck.highscore}</span>
        </header>

        <h4>{this.props.deck.name}</h4>

    </div>
  </React.Fragment>
  )}
}

export default Deck
