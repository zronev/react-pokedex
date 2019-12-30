import React from 'react'
import Pokeball from './Pokeball'
import { useDispatch } from 'react-redux'
import { dataToggleAction } from '../actions'

const Header = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(dataToggleAction('menu'))
  }

  return (
    <header className="header">
      <h1 className="header__title">
        <span className="header__title_poke">Poke</span>
        <span className="header__title_dex">dex</span>
      </h1>
      <Pokeball />
      <button onClick={handleClick} className="header__menu-button button button--menu">
        <i className="fas fa-bars" />
      </button>
    </header>
  )
}

export default Header
