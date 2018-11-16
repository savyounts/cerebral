import React from 'react'


class Question extends React.Component{
  state = {
    value: ''
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  render(){
    return(
      <div>
        <section className="card-container">

          <div className="deck-card">
            <h2>Question Here</h2>
            <button className="hint">HINT</button>
            <section className="card-buttons">
              <button className="back">back</button>
              <p>3/32</p>
              <button className="next">next</button>
            </section>
          </div>

          <footer>
            <form>
              <input type="text" value={this.state.value} placeholder="answer here" onChange={this.handleChange} />
              <input type="submit"/>
            </form>
          </footer>

        </section>
      </div>
    )}
}
export default Question
