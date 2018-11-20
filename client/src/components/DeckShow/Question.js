import React from 'react'
import InputForm from './InputForm'


class Question extends React.Component{
  state = {
    isHidden: false
  }

  clickHint = () =>{
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleSubmit = e =>{
    e.preventDefault()
    this.setState({
      isHidden: false
    })
    this.props.onSubmit()
  }
  render(){
    return(
      <React.Fragment>
            <h2>{this.props.card.question}</h2>
            {this.state.isHidden && <p>{this.props.card.hint}</p>}
            {!this.state.isHidden && <button className="hintButton" onClick={this.clickHint}>HINT</button>}

            <section className="card-buttons">
              <p>{this.props.turn}/{this.props.total}</p>
            </section>

          <footer>
            <InputForm value={this.props.value} onChange={this.props.onChange} onSubmit={this.handleSubmit} placeholder="answer here..." objectId={this.props.card.id} button="answer"/>
          </footer>

      </React.Fragment>
    )}
}
export default Question
