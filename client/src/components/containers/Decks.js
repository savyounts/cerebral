import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Deck from '../presentational/Deck'
import { connect } from 'react-redux'

class Decks extends React.Component{
  state = {
    value: ''
  }

  handleChange = e =>{
    this.setState({
      value: e.target.value
    })
  }

  render(){
  return(
    <div className="decks-container">
      <h1>102<br></br> Study Sets and Counting.</h1><br></br>
      <div className="card-deck">
        {this.props.decks.map(deck => <Deck value={this.state.value} onChange={this.handleChange} deck={deck}/>)}
      </div>
    </div>
  )}
}

const mapStateToProps = state => {
  return {decks: state.decks}
}

export default connect(mapStateToProps)(Decks)
