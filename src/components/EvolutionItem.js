import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setId } from '../actions'
import classNames from 'classnames'

const EvolutionItem = ({ name, index }) => {
  const theme = useSelector(state => state.theme)
  const [pokemon, setPokemon] = useState({})

  const dispatch = useDispatch()
  const handleClick = () => pokemon.id && dispatch(setId(pokemon.id))

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

  const liClass = classNames({
    evolution: true,
    'evolution--night': theme,
    evolutions__evolution: true,
  })

  return (
    <li
      onClick={handleClick}
      className={liClass}
    >
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
