import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { dataToggleAction } from '../actions'

const ThemeSwitcher = () => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme)

  const handleClick = () => {
    dispatch(dataToggleAction('TOGGLE_THEME'))
    document.body.classList.toggle('night')
  }

  useEffect(() => {
    theme && document.body.classList.add('night')
  }, [theme])

  return (
    <button
      onClick={handleClick}
      className={`theme-switcher ${
        theme ? 'theme-switcher--sun' : 'theme-switcher--moon'
      } header__theme-switcher`}
    >
      {(theme && <i className="fas fa-sun" />) || <i className="far fa-moon" />}
    </button>
  )
}

export default ThemeSwitcher
