import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const GoToCompare = () => {
  const toCompare = useSelector(state => state.toCompare)

  return (
    <Link className="button go-to-compare" to="/compare">
      Go to compare {toCompare.length} / 6
    </Link>
  )
}

export default GoToCompare
