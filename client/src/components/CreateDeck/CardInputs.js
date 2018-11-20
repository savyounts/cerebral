import React from 'react'

const CardInputs = (props) =>{
  return(
    props.cards.map((val, idx)=>{
      let qId = `q-${idx}`, aId=`a-${idx}`, hId=`h-${idx}`
      return(

        <div className="cardInput" key={idx}>

          <div className="rightBorder">
            <input
              type="text"
              name={qId}
              data-id={idx}
              id={qId}
              className="question"
              autoComplete="off"
            />
            <label htmlFor="question">Question</label>
          </div>

          <div className="rightBorder">
            <input
              type="text"
              name={aId}
              data-id={idx}
              id={aId}
              className="answer"
              autoComplete="off"
            />
            <label htmlFor="answer">Answer</label>
          </div>

          <div>
            <input
              type="text"
              name={hId}
              data-id={idx}
              id={hId}
              className="hint"
              autoComplete="off"
            />
            <label htmlFor="hint">Hint</label>
          </div>
          
        </div>
      )
    })
  )
}
export default CardInputs
