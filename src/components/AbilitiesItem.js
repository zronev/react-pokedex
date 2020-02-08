import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'

const AbilitiesItem = ({ ability, parent }) => {
  const theme = useSelector(state => state.theme)

  const [showDetail, setShowDetail] = useState(false)
  const [abilityData, setAbilityData] = useState({})
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const updateSize = () => setScreenWidth(window.innerWidth)
    updateSize()

    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [screenWidth])

  const handleClick = () => {
    if (screenWidth >= 1024) return
    setShowDetail(true)
  }
  const handleCloseClick = () => {
    if (screenWidth >= 1024) return
    setShowDetail(false)
  }

  const handleMouseEnter = () => {
    if (screenWidth < 1024) return
    setShowDetail(true)
  }

  const handleMouseLeave = () => {
    if (screenWidth < 1024) return
    setShowDetail(false)
  }

  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {
      try {
        const res = await fetch(ability.url, { signal: controller.signal })
        const data = await res.json()
        setAbilityData(data)
      } catch (e) {
        console.log(`${e.name}: ${e.message}`)
      }
    }
    fetchData()

    return () => controller.abort()
  }, [ability.url])

  const liClass = classNames({
    'ability-main': parent === 'pokemon',
    'ability-main--night': parent === 'pokemon' && theme,
    ability: parent !== 'pokemon',
    'ability--night': parent !== 'pokemon' && theme,
    abilities__ability: true,
  })

  const spanClass = classNames({
    'ability-main__name': parent === 'pokemon',
    ability__name: parent !== 'pokemon',
  })

  const pClass = classNames({
    'ability-main__descr': parent === 'pokemon',
    'ability-main__descr--night': parent === 'pokemon' && theme,
    ability__descr: parent !== 'pokemon',
    'ability__descr--night': parent !== 'pokemon' && theme,
  })

  const overlayClass = classNames({
    overlay: showDetail,
  })

  return (
    <>
      <li
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={liClass}
      >
        <span className={spanClass}>
          {ability.name}
          {showDetail && (
            <p className={pClass}>
              {abilityData.effect_entries && abilityData.effect_entries[0].short_effect}
            </p>
          )}
        </span>
      </li>

      {screenWidth < 1024 && <div onClick={handleCloseClick} className={overlayClass} />}
    </>
  )
}

export default AbilitiesItem
