import React from 'react'
import InputForm from './InputForm'


class StartRound extends React.Component{

  render(){
    return(
      <React.Fragment>

            <h2>Start playing now!</h2>
            <p>Enter a username to start</p>

          <footer>
            <InputForm value={this.props.value} onChange={this.props.onChange} onSubmit={this.props.onSubmit} placeholder="Username" objectId={this.props.deckId} button="start game"/>
          </footer>
      </React.Fragment>
    )}
}
export default StartRound
