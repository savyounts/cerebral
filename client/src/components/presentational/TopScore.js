import React from 'react'

const TopScore = ({round, num}) => (
  <div className="highscore-box">
    <div className="highscore-num-box">
      <p>{num}</p>
    </div>
    <div className="highscore-info-box">
      <span>{round.time} secs</span> <span>{round.score}</span> <span>{round.username}</span>
    </div>
  </div>

)
export default TopScore
