import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1> sorry, page not found </h1>
      <p> return to home page</p>
      <Link to="/">Go back to Home</Link>
    </div>
  )
}

export default NotFound
