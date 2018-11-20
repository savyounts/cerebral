import React from 'react'
import CardInputs from './CardInputs'
import DeckForm from './DeckForm'
import { createDeck } from '../../actions/deckActions'
import { createCard } from '../../actions/cardActions'

import { connect } from 'react-redux'

class NewPage extends React.Component {


  // state = {
  //   name: '',
  //   description: '',
  //   deckId: '',
  //   cardCount: 1,
  //   cards: []
  // }
  //
  // cardState = () => ({
  //   ['question' + this.state.cardCount]: '',
  //   ['answer' + this.state.cardCount]: '',
  //   ['hint' + this.state.cardCount]: '',
  //   deckId: this.state.deckId
  // })
  //
  //
  // submitCards = e =>{
  //   e.preventDefault()
  //   console.log(this.cardState())
  //
  //   // this.state.cards.forEach(card =>
  //   //  this.props.createCard(card))
  // }
  //
  // cardChange = e =>{
  //  this.setState({
  //     ...this.state,
  //     cards:[
  //       ...this.state.cards, {[e.target.name] : e.target.value}
  //     ]
  //   })
  // }
  //
  // handleChange = e =>{
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }
  //
  // findDeck = () => {
  //   const decks = this.props.decks
  //   this.setState({
  //     deckId: decks[decks.length -1].id
  //   })
  // }
  //
  // handleSubmit = e => {
  //   e.preventDefault()
  //   this.props.createDeck(this.state)
  //   this.findDeck()
  // }
  //
  //
  //
  // handleClick = e => {
  //   let newCard = <CardForm />
  //   let cards = this.state.cards.unshift(newCard);
  //   this.setState({cards});
  // }
  //
  // renderCards(){
  //   return this.state.cards.forEach((cards, index) => {
  //     return <CardForm key={index} />;
  //  });
  // }

  state={
    cards: [{question: '', answer:'', hint:''}],
    name: '',
    description: ''
  }

  addCard = (e) =>{
    this.setState((prevState)=> ({
      cards: [...prevState.cards, {question: '', answer:'', hint:''}]
    }))
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

  findDeck = (decks) => {
   return decks[decks.length - 1].id
 }

 resetState = () => {
   this.setState({
     name: '',
     description: '',
     cards: [{question: '', answer:'', hint:''}]
   })
 }

  handleSubmit = e => { e.preventDefault() }
    createCardsAndDeck = e =>{
    this.props.createDeck({name: this.state.name, description: this.state.description})
    const deckId = this.findDeck(this.props.decks)

    this.state.cards.forEach(card =>
     this.props.createCard(card, deckId))
    this.resetState()
}
  render(){
    let {name, description, cards} = this.state
    return(
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name} />
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" value={description} />
        <button onClick={this.addCard}>Add new card</button>
        <CardInputs cards={cards} />
        <button type="submit" onClick={this.createCardsAndDeck}>Create Deck</button>
      </form>

  )}
}

// {!this.state.deckId ? <DeckForm submit={this.handleSubmit} values={this.state} change={this.handleChange}/> :
// <CardForm deckId ={this.state.deckId} cardCount={this.state.cardCount} change={this.cardChange} submit={this.submitCards}/>}
const mapStateToProps = state =>({
  decks: state.decks
})

export default connect(mapStateToProps, { createDeck, createCard })(NewPage)
