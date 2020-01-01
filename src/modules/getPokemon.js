export const getPokemon = async idOrName => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}/`)
  const data = await res.json()

  return Promise.resolve({ pokemon: data })
}
