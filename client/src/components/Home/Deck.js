import React from 'react'


class Deck extends React.Component{

  state = {
    likes: 0
  }

  handleLike = e =>{
    this.setState(prevState => ({
      likes: prevState.likes + 1
    }))
  }
  handleClick = e =>{
    this.props.history.push(`/decks/${this.props.deck.id}`)
  }

  render(){

  return(
    <React.Fragment>
      <div className="deck-div" >
        <header className="top-info">
          <span>{this.props.deck.cards.length} terms</span> <span className="username">HighScore: {this.props.deck.highscore}</span>
        </header>

        <h4 onClick={this.handleClick}>{this.props.deck.name}</h4>
        <button onClick={this.handleLike}>Like</button>
        <p>{this.state.likes}</p>

    </div>
  </React.Fragment>
  )}
}

export default Deck
