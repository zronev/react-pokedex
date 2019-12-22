import React from 'react'

const TypesItem = ({ type }) => {
  return <li className={`types__type types__type_${type.name}`}>{type.name}</li>
}

export default TypesItem
