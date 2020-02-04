import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteFromСompared } from '../actions'

const ExcludeToCompare = ({ id }) => {
  const dispatch = useDispatch()
  const handleClick = () => dispatch(deleteFromСompared(id))

  return <i onClick={handleClick} className="to-compare far fa-minus-square" />
}

export default ExcludeToCompare
