import React, { useEffect, useState } from 'react'

const AbilitiesItem = ({ ability }) => {
  const [showDetail, setShowDetail] = useState(false)
  const [abilityData, setAbilityData] = useState({})

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

  return (
    <li
      onMouseEnter={() => setShowDetail(true)}
      onMouseLeave={() => setShowDetail(false)}
      className="abilty abilities__ability"
    >
      <span className="ability__name">{ability.name}</span>
      {showDetail && (
        <p className="ability__descr">
          {abilityData.effect_entries && abilityData.effect_entries[0].short_effect}
        </p>
      )}
    </li>
  )
}

export default AbilitiesItem
