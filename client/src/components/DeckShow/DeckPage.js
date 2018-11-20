import React from 'react'
import Question from './Question'
import DeckHeader from './DeckHeader'
import StartRound from './StartRound'
import EndRound from './EndRound'
import {connect} from 'react-redux'
import { createRound, updateScore } from './roundActions'
import { createGuess } from './guessActions'
import { updateHighscore } from '../../actions/deckActions'


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

  compareScores = () =>{
    if (this.props.round.score >= this.state.deck.highscore){
      this.setState({
        ...this.state,
        deck: {
          ...this.state.deck,
        highscore: this.props.round.score}
      })
    }
  }

  // compareTopScores = (deck, round) =>{
  //   let tops = deck.topscores.map(ts => ts.score)
  //   deck.topscores.map((ts, idx) => ts.score <= round.score ?
  //        {...deck.topscores.slice(0,idx), round, ...deck.topscores.slice(idx +1)} : deck.topscores
  // )}



  endGame = () =>{
    this.compareScores()
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
export default connect(mapStateToProps, { createRound, createGuess, updateScore, updateHighscore })(DeckPage)
