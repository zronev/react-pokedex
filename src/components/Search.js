import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setName } from '../actions'

const Search = () => {
  const inputRef = useRef('')
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setName(inputRef.current.value))
    inputRef.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit} className="search">
      <input ref={inputRef} type="search" className="search__input" placeholder="Type a pokemon..."/>
    </form>
  )
}

export default Search
