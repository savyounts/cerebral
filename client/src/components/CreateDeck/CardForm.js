import React from 'react'

class CardForm extends React.Component{
  state ={
    cardCount: 1,
    cards: []
  }
  //
  // cardState = () => ({
  //   ['question' + this.state.cardCount]: '',
  //   ['answer' + this.state.cardCount]: '',
  //   ['hint' + this.state.cardCount]: ''
  // })

  handleChange = e =>{
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  handleSubmit = e =>{
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  render(){
  return(
    <React.Fragment>
      <form onSubmit={this.props.submit}>
        <input type="hidden" value={this.props.deckId} />
        <input type="text" name={'question' + this.props.cardCount} value={this.state.question} onChange={this.props.change}/>
        <input type="text" name={'answer' + this.props.cardCount} value={this.state.answer} onChange={this.handleChange}/>
        <input type="text" name={'hint' + this.props.cardCount} value={this.state.hint} onChange={this.handleChange}/>
        <input type="submit" />

    </form>

      <button onClick={this.handleClick}> + ADD CARD </button>
    </React.Fragment>
    )}
  }
  export default CardForm
