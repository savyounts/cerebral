import React from 'react'
import CardForm from './CardForm'
import DeckForm from './DeckForm'
import { createDeck } from '../../actions/deckActions'
import { connect } from 'react-redux'

class CreateDeck extends React.Component {
  state = {
    name: '',
    description: '',
    deck: ''
  }

  handleChange = e =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  findDeck = () => {
    console.log(this.props.decks.last)
    // this.setState({
    //   deck: this.props.decks.last.id
    // })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    this.props.createDeck(this.state)
    this.findDeck()
  }

  handleClick = e => {
    let newCard = <CardForm />
    let cards = this.state.cards.unshift(newCard);
    this.setState({cards});
  }

  renderCards(){
    return this.state.cards.map((cards, index) => {
      return <CardForm key={index} />;
   });
  }

  render(){
  return(
    <React.Fragment>

    {!this.state.deck ? <DeckForm submit={this.handleSubmit} values={this.state} change={this.handleChange}/> : <CardForm />}

  </React.Fragment>
  )}
}


const mapStateToProps = state =>({
  decks: state.decks
})

export default connect(mapStateToProps, { createDeck })(CreateDeck)
