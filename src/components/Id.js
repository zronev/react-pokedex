import React from 'react'

const Id = ({ id, parent }) => {
  return <span className={`id ${parent}__id`}>{id > 10000 ? id - 9193 : id}</span>
}

export default Id
