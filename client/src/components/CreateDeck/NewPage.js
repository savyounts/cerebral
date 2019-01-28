import React from 'react'
import CardInputs from './CardInputs'
import { createDeck } from '../../actions/deckActions'
import { createCard } from '../../actions/cardActions'
import { connect } from 'react-redux'


class NewPage extends React.Component {

  state={
    cards: [{question: '', answer:'', hint:''}, {question: '', answer:'', hint:''}, {question: '', answer:'', hint:''}, {question: '', answer:'', hint:''}, {question: '', answer:'', hint:''}],
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

 resetState = () => {
   this.setState({
     cards: [],
     name: '',
     description: ''
   })
 }

  handleSubmit = e => {
    e.preventDefault()
    console.log('log','A')
    this.props.createDeck({name: this.state.name, description: this.state.description})
    .then(response =>{
      console.log('log','test')
      this.state.cards.forEach(card => this.props.createCard(card, response.id) )})
    .then( () => this.resetState())
    console.log('log','B')
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
