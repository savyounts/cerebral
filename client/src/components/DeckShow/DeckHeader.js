import React from 'react'
import TopScore from './TopScore'

const DeckHeader = ({name, topscores}) => (
  <React.Fragment>
    <section className="top-info">
      <span>{name} terms</span> <span className="username">HighScore:59</span>
      <h1>{name}</h1>
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
