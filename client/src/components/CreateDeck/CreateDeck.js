import React from 'react'
import CardForm from './CardForm'
import DeckForm from './DeckForm'
import { createDeck } from '../../actions/deckActions'
import { createCard } from '../../actions/cardActions'

import { connect } from 'react-redux'

class CreateDeck extends React.Component {
  state = {
    name: '',
    description: '',
    deckId: '',
    cardCount: 1,
    cards: []
  }

  cardState = () => ({
    ['question' + this.state.cardCount]: '',
    ['answer' + this.state.cardCount]: '',
    ['hint' + this.state.cardCount]: '',
    deckId: this.state.deckId
  })

  cardChange = e =>{
   this.setState({
      ...this.state,
      cards:[
        ...this.state.cards,
        ([e.target.name]: e.target.value)
      ]
    })
  }

  handleChange = e =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  findDeck = () => {
    const decks = this.props.decks
    this.setState({
      deckId: decks[decks.length -1].id
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createDeck(this.state)
    this.findDeck()
  }

  submitCards = e =>{
    e.preventDefault()
    this.state.cards.forEach(card =>
     this.props.createCard(card))
  }

  handleClick = e => {
    let newCard = <CardForm />
    let cards = this.state.cards.unshift(newCard);
    this.setState({cards});
  }

  renderCards(){
    return this.state.cards.forEach((cards, index) => {
      return <CardForm key={index} />;
   });
  }

  render(){
  return(
    <React.Fragment>

    {!this.state.deckId ? <DeckForm submit={this.handleSubmit} values={this.state} change={this.handleChange}/> :
    <CardForm deckId ={this.state.deckId} cardCount={this.state.cardCount} change={this.cardChange} submit={this.submitCards}/>}

  </React.Fragment>
  )}
}


const mapStateToProps = state =>({
  decks: state.decks
})

export default connect(mapStateToProps, { createDeck, createCard })(CreateDeck)
