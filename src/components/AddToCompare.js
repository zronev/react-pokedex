import React from 'react'
import { useDispatch } from 'react-redux'
import { addToСompared } from '../actions'

const AddToCompare = ({ id }) => {
  const dispatch = useDispatch()
  const handleClick = () => dispatch(addToСompared(id))

  return <i onClick={handleClick} className="to-compare far fa-plus-square" />
}

export default AddToCompare
