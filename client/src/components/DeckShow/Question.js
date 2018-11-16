import React from 'react'
import InputForm from './InputForm'


class Question extends React.Component{
  state = {
    isHidden: false
  }

  clickHint = () =>{
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render(){
    return(
      <div>
            <h2>Question Here</h2>
            {this.state.isHidden && <p>Hint goes here</p>}
            {!this.state.isHidden && <button className="hint" onClick={this.clickHint}>HINT</button>}
            <section className="card-buttons">
              <button className="back">back</button>
              <p>3/32</p>
              <button className="next">next</button>
            </section>

          <footer>
            <InputForm value={this.props.value} onChange={this.props.onChange} onSubmit={this.props.onSubmit} placeholder="answer here..." objectId={this.props.cardId}/>
          </footer>

      </div>
    )}
}
export default Question
