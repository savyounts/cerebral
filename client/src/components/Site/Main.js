import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from "../Home/Home"
import DeckPage from "../DeckShow/DeckPage"
import Footer from './Footer'
import NewPage from '../CreateDeck/NewPage'
import NotFound from './NotFound'
import Navigation from './Navigation'



const Main = () => (
  <BrowserRouter>
    <React.Fragment>

      <Navigation />

      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/decks/new' component={NewPage}/>
        <Route path='/decks/:id' render={routerProps => <DeckPage {...routerProps}/> }/>
        <Route component={NotFound} />
      </Switch>

    <Footer/>
    
  </React.Fragment>
</BrowserRouter>
)

export default Main
