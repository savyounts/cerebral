import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from "./Home"
import Profile from "./Profile"
import Decks from "./Decks"
import Footer from './Footer'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/decks' component={Decks}/>
      <Route path='/user/:id' component={Profile}/>
    </Switch>
  <Footer/>
  </main>
)

export default Main
