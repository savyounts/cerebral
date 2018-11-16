import React from 'react'
import TopScore from './TopScore'

const DeckHeader = ({deck, topscores}) =>
  <React.Fragment>
    <section className="top-info">
      <span>'not working' terms</span> <span className="username">Highscore: {deck.highscore}</span>
      <h1>{deck.name}</h1>
       {/*<button className="copy-deck">copy</button>
      <button className="save-deck">save</button>*/}
    </section>

    <section className="highscores">
      <h6 className="topscores">Top Scores:</h6>
      { deb(deck) }
    </section>
  </React.Fragment>

function deb(deck) {
  if(deck === "") return null

  return deck.topscores.map((round, index) => <TopScore key={index} round={round} num={index+1}/>)
}

export default DeckHeader
