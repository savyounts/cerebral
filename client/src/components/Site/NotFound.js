import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () =>
    <div className="notFound">
      <h1>Whoops, this page doesn't exist</h1>
      <Link to='/'>Click here to see all our quizzes</Link>
    </div>


export default NotFound
