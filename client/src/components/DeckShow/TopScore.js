import React from 'react'

const TopScore = ({round, num, cards}) => (
  <div className="highscore-box">
    <div className="highscore-num-box">
      <p>{num}</p>
    </div>
    <div className="highscore-info-box">
      <span>{percentCorrect(round.score, cards)}%</span> <span>{round.username}</span>
    </div>
  </div>

)

const percentCorrect = (num, den) => Math.floor((parseInt(num)/den)*100)

export default TopScore
