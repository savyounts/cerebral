import React from 'react'
import TopScore from './TopScore'
import Question from './Question'

const topscores= [{time: 103, score: 2, username: "Savannah"}, {time: 103, score: 2, username: "sav"}, {time: 103, score: 2, username: "sav"}]
const DeckPage = (props) => (
  <div>
    <div className="overlay"></div>
    <header className="deck-page-header">
      <section className="top-info">
        <span>32 terms</span> <span className="username">HighScore:59</span>
        <h1>Deck Name</h1>
        <button className="copy-deck">copy</button>
        <button className="save-deck">save</button>
      </section>

      <section className="highscores">
        <h6 className="topscores">Top Scores:</h6>
        {topscores.map((round, index) => <TopScore key={index} round={round} num={index+1}/>)}
      </section>
    </header>

    <main className='deck-body'>
      <Question />
    </main>

  </div>
)

export default DeckPage
