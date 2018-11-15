import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TopScore from './TopScore'

const DeckPage = (props) => (
  <div>
    <header>
      <section className="top-info">
        <span>32 terms</span> <span className="username">HighScore:59</span>
        <h1>Deck Name</h1>
        <button className="copy-deck">copy</button>
        <button className="save-deck">save</button>
      </section>

      <section className="highscores">
        <p>Top Scores:</p>
        {props.topscores.map((round, index) => <TopScore key={index} round={round} num={index+1}/>)}
      </section>
    </header>





  </div>
)

export default DeckPage
