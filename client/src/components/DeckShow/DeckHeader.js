import React from 'react'
import TopScore from './TopScore'

const DeckHeader = ({deck, topscores}) => (
  <React.Fragment>
    <section className="top-info">
      <span>{deck.id} terms</span> <span className="username">Highscore: {deck.highscore}</span>
      <h1>{deck.name}</h1>
      <button className="copy-deck">copy</button>
      <button className="save-deck">save</button>
    </section>

    <section className="highscores">
      <h6 className="topscores">Top Scores:</h6>
      {topscores.map((round, index) => <TopScore key={index} round={round} num={index+1}/>)}
    </section>
  </React.Fragment>
)
export default DeckHeader
