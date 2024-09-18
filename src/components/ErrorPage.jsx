import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h1> Oops! Something went wrong. </h1>
      <p> sorry, an unexpected error has occured. </p>
      <Link to="/">Go back to Home</Link>
    </div>
  )
}

export default ErrorPage
