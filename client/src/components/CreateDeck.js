import React from 'react'
import CardForm from './CreateDeck/CardForm'

class CreateDeck extends React.Component {
  state = {
    name: '',
    cards: []
  }

  handleChange = e =>{
    this.setState({
      name: e.target.value
    })
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
    <form>
      <input type="text" value={this.state.name} onChange={this.handleChange} placeholder="Name Your Deck"/>
      <br></br>
      {this.state.cards}
      {this.renderCards()}
      <br></br>
      <input type="submit" value="create deck"/>
    </form>
    <button onClick={this.handleClick}> + ADD CARD </button>
  </React.Fragment>
  )}
}
// {this.state.addCard ? <CardForm /> : <React.Fragment></React.Fragment>}

export default CreateDeck
