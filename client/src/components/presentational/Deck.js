import React from 'react'

const Deck = ({deck, value, onChange}) => {
  return(
    <div className="deck-div">
      <header className="top-info">
        <span>{deck.cards.length} terms</span> <span className="username">HighScore: {deck.highscore}</span>
      </header>
      <h4>{deck.name}</h4>
      <footer>
        <button className="enter-password">lock</button>
        <input type="text" placeholder="enter password..." value={value} onChange={onChange}/>
        <section className="left-deck-buttons">
          <button className="copy-deck">copy</button>
          <button className="save-deck">save</button>

        </section>
    </footer>

    </div>
  )
}

export default Deck
