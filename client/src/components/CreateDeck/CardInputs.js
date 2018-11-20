import React from 'react'

const CardInputs = (props) =>{
  return(
    props.cards.map((val, idx)=>{
      let qId = `q-${idx}`, aId=`a-${idx}`, hId=`h-${idx}`
      return(
        <div key={idx}>
          <input
            type="text"
            name={qId}
            data-id={idx}
            id={qId}
            className="question"
            placeholder="Question"
          />
          <input
            type="text"
            name={aId}
            data-id={idx}
            id={aId}
            className="answer"
            placeholder="Answer"
          />
          <input
            type="text"
            name={hId}
            data-id={idx}
            id={hId}
            className="hint"
            placeholder="hint"
          />

        </div>
      )
    })
  )
}
export default CardInputs
