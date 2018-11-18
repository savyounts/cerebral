import React from 'react'

class CardForm extends React.Component{
  state ={
    question: '',
    answer: '',
    hint: ''
  }

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
      <div onSubmit={this.handleSubmit}>
        <input type="text" name="question" value={this.state.question} onChange={this.handleChange}/>
        <input type="text" name="answer" value={this.state.answer} onChange={this.handleChange}/>
        <input type="text" name="hint" value={this.state.hint} onChange={this.handleChange}/>
      </div>

      <button onClick={this.handleClick}> + ADD CARD </button>
    </React.Fragment>
    )}
  }
  export default CardForm
