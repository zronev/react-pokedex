import React, { useEffect, useState } from 'react'

const EvolutionItem = ({ name, index }) => {
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    const controller = new AbortController()
    const url = `https://pokeapi.co/api/v2/pokemon/${name}/`

    const fetchData = async () => {
      try {
        const res = await fetch(url, { signal: controller.signal })
        const data = await res.json()

        setPokemon(data)
      } catch (e) {
        console.log(`${e.name}: ${e.message}`)
      }
    }
    fetchData()

    return () => controller.abort()
 
  }, [name])

  return (
    <li className="evolution evolutions__evolution">
      <figure className="figure evolution__figure">
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt="" className="figure__img" />
        )}
        <figcaption className="figure__caption">
          {index} {name}
        </figcaption>
      </figure>
    </li>
  )
}

export default EvolutionItem
