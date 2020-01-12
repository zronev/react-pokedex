import React, { useEffect, useState, useCallback } from 'react'

const EvolutionItem = ({ name }) => {
  const [formattedName, setFormattedName] = useState('')
  const [pokemon, setPokemon] = useState({})

  const formatName = useCallback(() => {
    if (!name.includes('>')) {
      setFormattedName(name)
      return
    }
    setFormattedName(name.slice(2, name.length))
  }, [name])

  const fetchData = useCallback(async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${formattedName}/`)
    const data = await res.json()

    setPokemon(data)
  }, [formattedName])

  useEffect(() => {
    formatName()

    if (formattedName) fetchData()
  }, [fetchData, formatName, formattedName, name])

  return (
    <li className="evolution evolutions__evolution">
      {pokemon.sprites && <img src={pokemon.sprites.front_default} alt="" />}
      <span>{name}</span>
    </li>
  )
}

export default EvolutionItem
