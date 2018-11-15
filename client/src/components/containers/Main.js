import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from "../Home"
import DeckPage from "../presentational/DeckPage"
import Footer from '../presentational/Footer'
import CreateDeck from '../presentational/CreateDeck'
import NotFound from '../presentational/NotFound'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/decks/new' component={CreateDeck}/>
      <Route path='/decks/:id' component={DeckPage}/>
      <Route component={NotFound} />
    </Switch>
  <Footer/>
  </main>
)

export default Main
