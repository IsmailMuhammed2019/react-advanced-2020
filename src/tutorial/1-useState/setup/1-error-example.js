import React from 'react'

let title = 'The Beginning of the End'

const handleClick = () => {
  title = 'This is a new title'
  console.log(title)
}

const ErrorExample = () => {
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type='button' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  )
}

export default ErrorExample
