import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from "./Home"
import Profile from "./Profile"
import Footer from './Footer'
import CreateDeck from './presentational/CreateDeck'
import NotFound from './presentational/NotFound'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/decks/new' component={CreateDeck}/>
      <Route path='/user/:id' component={Profile}/>
      <Route component={NotFound} />
    </Switch>
  <Footer/>
  </main>
)

export default Main
