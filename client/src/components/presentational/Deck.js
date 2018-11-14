import React from 'react'

const Deck = (props) => {
  return(
    <div className="deck-div">
      <header className="top-info">
        <span>32 terms</span> <span className="username">Username</span>
      </header>
      <h4>Deck Name</h4>
      <footer>
        <button className="enter-password">lock</button>
        <input type="text" placeholder="enter password..." value={props.value} onChange={props.onChange}/>
        <section className="left-deck-buttons">
          <button className="copy-deck">copy</button>
          <button className="save-deck">save</button>

        </section>
    </footer>

    </div>
  )
}

export default Deck
