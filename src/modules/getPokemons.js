export const getPokemons = async offset => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
  const data = await res.json()

  return Promise.resolve({ pokemons: data })
}
