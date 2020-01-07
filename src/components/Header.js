import React from 'react'
import { useDispatch } from 'react-redux'
import { dataToggleAction } from '../actions'
import { Link } from 'react-router-dom'

import Pokeball from './Pokeball'

const Header = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(dataToggleAction('menu'))
  }

  return (
    <header className="header">
      <h1 className="header__title">
        <Link to="/">
          <span className="header__title_poke">Poké</span>
          <span className="header__title_dex">dex</span>
        </Link>
      </h1>
      <Pokeball />
      <button onClick={handleClick} className="header__menu-button button button--menu">
        <i className="fas fa-bars" />
      </button>
    </header>
  )
}

export default Header
