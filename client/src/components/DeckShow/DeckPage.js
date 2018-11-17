import React from 'react'
import Question from './Question'
import DeckHeader from './DeckHeader'
import StartRound from './StartRound'
import EndRound from './EndRound'
import {connect} from 'react-redux'
import { createRound, updateScore } from './roundActions'
import { createGuess } from './guessActions'

import Axios from 'axios';


class DeckPage extends React.Component{
  state={
    roundStart: false,
    roundEnd: false,
    response: "",
    card: '',
    turn: 1,
    deck: ''

  }

  handleChange = e => {
    this.setState({
      response: e.target.value
    })
  }

  startRound = e =>{
    console.log(`username: ${this.state.response}`)
    e.preventDefault()
    this.props.createRound(this.state)
    this.setState({
      roundStart: true,
      response: '',
      card: this.state.deck.cards[0]
    })
  }

//   createGuess = () => {
//     Axios.post('http://localhost:3001/api/guesses', {response: this.state.response, round_id: this.props.round.id, card_id: this.state.card.id})
//   // fetch('http://localhost:3001/api/guesses', {
//   //   method: "POST",
//   //   headers: 'Content-Type: application/json',
//   //   body: JSON.stringify({response: this.state.response, card_id: this.state.card.id, })
//   // })
// }

  endGame = () =>{
    this.setState({
      roundStart: false,
      roundEnd: true,
      round:null,
      response: '',
      card: this.state.deck.cards[0],
      turn: 1
    })
  }

  nextTurn = () =>{
    this.setState({
      response: '',
      card: this.state.deck.cards[this.state.turn],
      turn: this.state.turn + 1
    })
  }

  answerSubmit = () => {
    console.log(this.state)
    console.log(this.state.card)
    console.log(this.state.response)
    this.props.createGuess(this.state, this.props.round)
    this.props.updateScore(this.state.response, this.state.card)
    this.state.turn === (this.state.deck.cards.length) ? this.endGame() : this.nextTurn()


  }

  componentDidMount(){
    fetch(`http://localhost:3001/api/decks/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(deck => this.setState({deck}))
  }

  render(){
    return(
      <div>
        <div className="overlay"></div>

        <header className="deck-page-header">
          <DeckHeader deck={this.state.deck}/>
        </header>

        <main className='deck-body'>
          <section className="card-container">

              {(!this.state.roundStart && !this.state.roundEnd) && <StartRound value={this.state.response} onSubmit={this.startRound} onChange={this.handleChange} deckId={this.props.match.params.id} />}

              {this.state.roundStart && <Question value={this.state.response} onChange={this.handleChange} onSubmit={this.answerSubmit} card={this.state.card} turn={this.state.turn} total={this.state.deck.cards.length}/>}

              {(!this.state.roundStart && this.state.roundEnd) && <EndRound value={this.state.response} onSubmit={this.startRound} onChange={this.handleChange} round={this.props.round} total={this.state.deck.cards.length}/>}

          </section>
        </main>

      </div>
    )}
}

const mapStateToProps = state =>({
    round: state.round,
    guess: state.guess
})
export default connect(mapStateToProps, { createRound, createGuess, updateScore })(DeckPage)
