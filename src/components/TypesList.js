import React from 'react'
import TypesItem from './TypesItem'

const TypesList = ({ types, parent }) => {
  return (
    <ul className={`types ${parent}__types`}>
      {types.map((type, index) => (
        <TypesItem key={index} type={type.type} />
      ))}
    </ul>
  )
}

export default TypesList
