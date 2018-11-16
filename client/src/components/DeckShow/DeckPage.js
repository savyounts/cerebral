import React from 'react'
import Question from './Question'
import DeckHeader from './DeckHeader'
import StartRound from './StartRound'

const topscores= [{time: 103, score: 2, username: "Savannah"}, {time: 103, score: 2, username: "sav"}, {time: 103, score: 2, username: "sav"}]
class DeckPage extends React.Component{
  state={
    roundStart: false,
    value: ""
  }


  startRound = e =>{
    e.preventDefault()
    this.setState({
      roundStart: true,
      value: ''
    })
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  answerSubmit = e => {
    e.preventDefault()
    this.setState({
      value: ''
    })
  }

  componentDidMount(){
    fetch(`http://localhost:3001/api/decks/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(deck => this.setState({deck: deck}) )
  }

  render(){
    console.log(this.state.deck.name)
    return(
      <div>
        <div className="overlay"></div>

        <header className="deck-page-header">
          <DeckHeader topscores={topscores} deck={this.props.match.params.id}/>
        </header>

        <main className='deck-body'>
          <section className="card-container">
            <div className="deck-card">
              {!this.state.roundStart && <StartRound value={this.state.value} onSubmit={this.startRound} onChange={this.handleChange} deckId={this.props.match.params.id} />}
              {this.state.roundStart && <Question value={this.state.value} onChange={this.handleChange} onSubmit={this.answerSubmit} cardId="3"/>}
            </div>
          </section>
        </main>

      </div>
    )}
}
export default DeckPage
