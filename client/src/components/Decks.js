import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Deck from './presentational/Deck'

const Decks = () => {
  return(
    <div>
    <h1>102<br></br> Study Sets and Counting.</h1>
    <Deck />
    <Deck />
    <Deck />
    <Deck />
    <Deck />
    <Deck />
    <Deck />
    <Deck />
    </div>
  )
}

export default Decks
