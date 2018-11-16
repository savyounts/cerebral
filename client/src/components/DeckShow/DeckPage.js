import React from 'react'
import Question from './Question'
import DeckHeader from './DeckHeader'
import StartRound from './StartRound'
import EndRound from './EndRound'

const cards= [{id: 1, question: "1+1", answer: "2", hint: "add" }, {id:2, question: "1+2", answer: "3", hint: "add more" }, {id:3, question: "1+4", answer: "5", hint: "add even more" }]
const topscores= [{time: 103, score: 2, username: "Savannah"}, {time: 103, score: 2, username: "sav"}, {time: 103, score: 2, username: "sav"}]
class DeckPage extends React.Component{
  state={
    roundStart: false,
    roundEnd: false,
    response: "",
    card: cards[0],
    round: null,
    turn: 1,
    deck: ''

  }

  handleChange = e => {
    this.setState({
      response: e.target.value
    })
  }

  startRound = e =>{
    e.preventDefault()
    this.setState({
      roundStart: true,
      response: ''
    })
  }

  createGuess = () => {
  //   fetch('the server URL', {
  //   method: "POST",
  //   headers: 'Content-Type: application/json',
  //   body: JSON.stringify(this.state)
  // })
  console.log(`im guess for turn ${this.state.turn} out of ${cards.length}`)
}

  endGame = () =>{
    this.setState({
      roundStart: false,
      roundEnd: true,
      round:null,
      response: '',
      card: cards[0],
      turn: 1
    })
  }

  nextTurn = () =>{
    this.setState({
      response: '',
      card: cards[this.state.turn],
      turn: this.state.turn + 1
    })
  }

  answerSubmit = () => {
    this.createGuess()
    this.state.turn === (cards.length) ? this.endGame() : this.nextTurn()
    console.log(this.state)
  }

  componentDidMount(){
    fetch(`http://localhost:3001/api/decks/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(deck => this.setState({deck}))
  }

  render(){
    console.log(this.state.deck)
    return(
      <div>
        <div className="overlay"></div>

        <header className="deck-page-header">
          <DeckHeader topscores={topscores} deck={this.state.deck}/>
        </header>

        <main className='deck-body'>
          <section className="card-container">

              {(!this.state.roundStart && !this.state.roundEnd) && <StartRound value={this.state.response} onSubmit={this.startRound} onChange={this.handleChange} deckId={this.props.match.params.id} />}
              {this.state.roundStart && <Question value={this.state.response} onChange={this.handleChange} onSubmit={this.answerSubmit} card={this.state.card} turn={this.state.turn} total="3*"/>}
              {(!this.state.roundStart && this.state.roundEnd) && <EndRound value={this.state.response} onSubmit={this.startRound} onChange={this.handleChange} deckId={this.props.match.params.id} />}

          </section>
        </main>

      </div>
    )}
}
export default DeckPage
