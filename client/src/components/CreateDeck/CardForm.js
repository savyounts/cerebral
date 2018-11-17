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

  render(){
  return(
    <React.Fragment>
      <input type="text" name="question" value={this.state.question} onChange={this.handleChange}/>
      <input type="text" name="answer" value={this.state.answer} onChange={this.handleChange}/>
      <input type="text" name="hint" value={this.state.hint} onChange={this.handleChange}/>
    </React.Fragment>
    )}
  }
  export default CardForm
