import React from 'react'

const Id = ({ id }) => {
  return <span className="id card__id">{id > 10000 ? id - 9193 : id}</span>
}

export default Id
