import React from 'react'
import { useDispatch } from 'react-redux'
import { dataToggleAction } from '../actions'
import { Link } from 'react-router-dom'

import Pokeball from './Pokeball'

const Header = () => {
  const dispatch = useDispatch()

  const handleMenuClick = () => {
    dispatch(dataToggleAction('menu'))
  }

  const handleSearchClick = () => {
    dispatch(dataToggleAction('SEARCH'))
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
      <button
        onClick={handleMenuClick}
        className="header__menu-open menu-open"
      >
        <i className="fas fa-bars" />
      </button>

      <i onClick={handleSearchClick} className="header__go-to-search fas fa-search" />
    </header>
  )
}

export default Header
