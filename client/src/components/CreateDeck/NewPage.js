import React from 'react'
import CardInputs from './CardInputs'
import DeckForm from './DeckForm'
import { createDeck } from '../../actions/deckActions'
import { createCard } from '../../actions/cardActions'

import { connect } from 'react-redux'

class NewPage extends React.Component {

  state={
    cards: [{question: '', answer:'', hint:''}],
    name: '',
    description: ''
  }

  addCard = (e) =>{
    e.preventDefault()
    this.setState({
      cards: [...this.state.cards, {question: '', answer:'', hint:''}]
    })
  }

  handleChange = e =>{
    if (['question', 'answer', 'hint'].includes(e.target.className)){
      let cards = [...this.state.cards]
      cards[e.target.dataset.id][e.target.className] = e.target.value
      this.setState({ cards }, () => console.log(this.state.cards))
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

 findDeck = () => {
   fetch(`http://localhost:3001/api/decks`)
   .then(response => response.json())
   .then(decks => console.log(decks[decks.length -1]))
 }

 resetState = () => {
   this.setState({
     name: '',
     description: '',
     cards: [{question: '', answer:'', hint:''}]
   })
 }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createDeck({name: this.state.name, description: this.state.description})
    .then(response =>
      this.state.cards.forEach(card => this.props.createCard(card, response.id) ))
    .then( () => this.resetState())
}
  render(){
    let {name, description, cards} = this.state
    return(
      <React.Fragment>
        <div className="overlay"></div>
        <form className="createNew" onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <label htmlFor="name">Name</label>
          <input type="text" className="deckInput" name="name" id="name" value={name} autoComplete="off"/>
          <label htmlFor="description">Description</label>
          <textarea type="text"  className="deckInput" name="description" id="description" value={description}  autoComplete="off"/>

          <CardInputs cards={cards} />
          <button className="addCard" onClick={this.addCard}><span>  + ADD CARD  </span></button>
          <button  className="addCard" type="submit" onClick={this.createCardsAndDeck}><span>CREATE DECK</span></button>
        </form>
    </React.Fragment>

  )}
}

const mapStateToProps = state =>({
  decks: state.decks
})

export default connect(mapStateToProps, { createDeck, createCard })(NewPage)
