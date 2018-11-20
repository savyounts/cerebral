import React from 'react'
import TopScore from './TopScore'

const DeckHeader = ({deck}) =>

  <React.Fragment>
    <section className="top-info">
      <span> { cardCount(deck) } terms</span> <span className="username"> Highscore: {deck.highscore} </span>
      <h1>{deck.name}</h1>
       <h6>{deck.description}</h6>
    </section>

    <section className="highscores">
      <h6 className="topscores">Top Scores:</h6>
      { topScoreBox(deck) }
    </section>
  </React.Fragment>

function topScoreBox(deck) {
  if(deck === "") return null
  if (deck.topscores.length < 1) return "No Scores Yet"

  return deck.topscores.map((round, index) => <TopScore key={index} round={round} num={index+1} cards={cardCount(deck)}/>)
}

function cardCount(deck) {
  if(deck === "") return 0

  return deck.cards.length
}

export default DeckHeader
