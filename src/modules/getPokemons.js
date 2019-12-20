export const getPokemons = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20`)
  const data = await res.json()

  return Promise.resolve({ pokemons: data })
}
