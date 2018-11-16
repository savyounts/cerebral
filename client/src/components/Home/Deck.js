import React from 'react'
import { Redirect, withRouter } from 'react-router'



class Deck extends React.Component{
  state = {
    value: ''
  }


  handleChange = e =>{
    this.setState({
      value: e.target.value
    })
  }

  handleClick = e =>{
    console.log(e.target)
    this.props.history.push(`/decks/${this.props.deck.id}`)
    // return <Redirect push to="/decks/1" />
  }

  render(){

  return(
    <React.Fragment>
    <div className="deck-div" onClick={this.handleClick}>
      <header className="top-info">
        <span>{this.props.deck.cards.length} terms</span> <span className="username">HighScore: {this.props.deck.highscore}</span>
      </header>
      <h4>{this.props.deck.name}</h4>
      <footer>
        <button className="enter-password">lock</button>
        <input type="text" placeholder="enter password..." value={this.state.value} onChange={this.handleChange}/>
        <section className="left-deck-buttons">
          <button className="copy-deck">copy</button>
          <button className="save-deck">save</button>

        </section>
    </footer>

    </div>
  </React.Fragment>
  )}
}

export default Deck
