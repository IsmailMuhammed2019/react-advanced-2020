import React from 'react'
import { data } from '../../../data'

//import useState from react liberary
import { useState } from 'react'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div className='item' key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove Item</button>
          </div>
        )
      })}
      <button className='btn' onClick={() => setPeople([])}>
        Clear All
      </button>
    </>
  )
}

export default UseStateArray
