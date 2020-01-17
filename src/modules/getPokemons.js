export const getPokemons = async (offset = 0, limit = 20, setIsFetching) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`,
  )
  const data = await res.json()

  setIsFetching && setIsFetching(false)

  return Promise.resolve({ pokemons: data })
}
