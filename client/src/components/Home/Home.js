import React from 'react'
import { Link } from 'react-router-dom'
import DeckList from './DeckList'

const Home = () =>
  <div className="home-page">
    <section className="home-info">
      <div className="home-self">

        <h1>Simple tools<br></br>for learning anything.</h1>
        <p>
          Search hundreds of study sets or create your own to improve
          your grades. Create competitions with your friends to see who
          can get the most right.
        </p>
        <Link className="get-started" to={`/decks/new`}>Get Started.</Link>
      </div>
    </section>

    <DeckList />
  </div>

export default Home
