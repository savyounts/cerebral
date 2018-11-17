import React from 'react'
import InputForm from './InputForm'


class EndRound extends React.Component{

  render(){
    return(
      <React.Fragment>

            <h2>Good Job Username</h2>
            <p>You scored __ out of __ right</p>
            <p>Enter your username to play again</p>


          <footer>
            <InputForm value={this.props.value} onChange={this.props.onChange} onSubmit={this.props.onSubmit} placeholder="Username" objectId={this.props.deckId} button="play again"/>
          </footer>
      </React.Fragment>
    )}
}
export default EndRound