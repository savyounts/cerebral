import React from 'react'
import CardForm from './CardForm'
import DeckForm from './DeckForm'

class CreateDeck extends React.Component {
  state = {
    name: '',
    description: '',
    cards: []
  }

  handleChange = e =>{
    console.log({[e.target.name]: e.target.value})
    // this.setState({
    //   [e.target.name]: e.target.value
    // })
  }

  handleSubmit = values => {
    console.log(values)
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
    <h1>Make a new deck</h1>

    <DeckForm onSubmit={this.handleSubmit}/>
  {/*  <button onClick={this.handleClick}> + ADD CARD </button>*/}
  </React.Fragment>
  )}
}
// {this.state.addCard ? <CardForm /> : <React.Fragment></React.Fragment>}

export default CreateDeck
