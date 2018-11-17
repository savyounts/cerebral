import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from "../Home/Home"
import DeckPage from "../DeckShow/DeckPage"
import Footer from './Footer'
import CreateDeck from '../CreateDeck/CreateDeck'
import NotFound from './NotFound'
import Header from './Header'



const Main = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/decks/new' component={CreateDeck}/>
        <Route path='/decks/:id' render={routerProps => <DeckPage {...routerProps}/> }/>
        <Route component={NotFound} />
      </Switch>
    <Footer/>
  </React.Fragment>
</BrowserRouter>
)

export default Main
