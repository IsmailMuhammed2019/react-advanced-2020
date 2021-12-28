import React, { useState } from 'react'

const UseStateBasics = () => {
  //create a use state
  const [text, setText] = useState('The Old Title')

  const clickHandler = () => {
    if (text === 'The Old Title') {
      setText('The New title')
    } else {
      setText('The Old Title')
    }
  }
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type='button' onClick={clickHandler}>
        Change title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
