import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from "../Home/Home"
import DeckPage from "../DeckShow/DeckPage"
import Footer from './Footer'
import CreateDeck from '../CreateDeck'
import NotFound from './NotFound'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/decks/new' component={CreateDeck}/>
      <Route path='/decks/:id' render={routerProps => <DeckPage {...routerProps}/> }/>
      <Route component={NotFound} />
    </Switch>
  <Footer/>
  </main>
)

export default Main
