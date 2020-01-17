import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setName, dataToggleAction, setId } from '../actions'

const Search = () => {
  const inputRef = useRef('')
  const isOpen = useSelector(state => state.search)
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()

    if (Number(inputRef.current.value)) dispatch(setId(Number(inputRef.current.value)))
    else {
      dispatch(setName(inputRef.current.value.toLowerCase().trim()))
      dispatch(dataToggleAction('SHOW_SEARCH_RESULT'))
    }

    inputRef.current.value = ''
    dispatch(dataToggleAction('SEARCH'))
  }

  const handleCloseClick = () => {
    dispatch(dataToggleAction('SEARCH'))
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`search ${isOpen ? 'search--is-open' : ''} header__search`}
      >
        <input
          ref={inputRef}
          type="search"
          className="search__input"
          placeholder="Type a pokemon name or id..."
        />
        <i onClick={handleCloseClick} className="search__close fas fa-times"></i>
      </form>

      <div onClick={handleCloseClick} className={`${isOpen ? 'overlay' : ''}`} />
    </>
  )
}

export default Search
