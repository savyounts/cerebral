import React from 'react'
import InputForm from './InputForm'


const EndRound = (props) =>
  <React.Fragment>

    <h2>Good Job {props.round.username}</h2>
    <p>You scored {props.round.score} out of {props.total} right</p>
    <p>Enter your username to play again</p>


    <footer>
        <InputForm value={props.value} onChange={props.onChange} onSubmit={props.onSubmit} placeholder="Username" objectId={props.deckId} button="play again"/>
    </footer>

  </React.Fragment>

export default EndRound
