import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { dataToggleAction } from '../actions'

const Menu = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector(state => state.menu)

  const handleClick = () => {
    dispatch(dataToggleAction('menu'))
  }

  return (
    <>
      <nav className={`menu ${isOpen ? 'menu--is-open' : ''}`}>
        <button onClick={handleClick} className="button button--menu menu__close">
          <i className="fas fa-times"></i>
        </button>

        <ul className="menu__list">
          <li className="menu__item">
            <Link onClick={handleClick} className="link menu__link" to="/">
              <i className="link__icon fas fa-home" />
              Home
            </Link>
          </li>

          <li className="menu__item">
            <Link onClick={handleClick} className="link menu__link" to="/grid">
              <i className="link__icon fas fa-th-large" />
              Grid
            </Link>
          </li>

          <li className="menu__item">
            <Link onClick={handleClick} className="link menu__link" to="/favorites">
              <i className="link__icon fas fa-heart" />
              Favorites
            </Link>
          </li>

          <li className="menu__item">
            <Link onClick={handleClick} className="link menu__link" to="/about">
              <i className="link__icon fas fa-align-left" />
              About
            </Link>
          </li>
        </ul>
      </nav>

      <div onClick={handleClick} className={`${isOpen ? 'overlay' : ''}`} />
    </>
  )
}

export default Menu
