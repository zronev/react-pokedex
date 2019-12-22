import React from 'react'
import TypesItem from './TypesItem'

const TypesList = ({ types }) => {
  return (
    <ul className="types pokemon__types">
      {types.map((type, index) => (
        <TypesItem key={index} type={type.type} />
      ))}
    </ul>
  )
}

export default TypesList
