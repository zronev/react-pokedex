import React from 'react'
import { useSelector } from 'react-redux'

const TypesItem = ({ type }) => {
  const theme = useSelector(state => state.theme)
  return <li className={`types__type types__type_${type.name} ${theme ? 'types__type--night' : ''}`}>{type.name}</li>
}

export default TypesItem
