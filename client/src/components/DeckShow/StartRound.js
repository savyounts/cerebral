import React from 'react'
import InputForm from './InputForm'


const StartRound = (props) =>
  <React.Fragment>

    <h2>Start playing now!</h2>
    <p>Enter a username to start</p>

    <footer>
      <InputForm value={props.value} onChange={props.onChange} onSubmit={props.onSubmit} placeholder="Username" objectId={props.deckId} button="start game"/>
    </footer>
  </React.Fragment>

export default StartRound
