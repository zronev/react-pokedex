export const getPokemon = async id => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  const data = await res.json()

  return Promise.resolve({ pokemon: data })
}
