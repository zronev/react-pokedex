import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

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

  return (
    <>
      <li
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={`ability${parent === 'pokemon' ? '-main' : ''} ${
          theme ? 'ability--night' : ''
        } abilities__ability`}
      >
        <span className={`ability${parent === 'pokemon' ? '-main' : ''}__name`}>
          {ability.name}
          {showDetail && (
            <p
              className={`ability${parent === 'pokemon' ? '-main' : ''}__descr ${
                theme ? `ability${parent === 'pokemon' ? '-main' : ''}__descr--night` : ''
              }`}
            >
              {abilityData.effect_entries && abilityData.effect_entries[0].short_effect}
            </p>
          )}
        </span>
      </li>

      {screenWidth < 1024 && (
        <div onClick={handleCloseClick} className={`${showDetail ? 'overlay' : ''}`} />
      )}
    </>
  )
}

export default AbilitiesItem
