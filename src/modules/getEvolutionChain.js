export const getEvolutionChain = async url => {
  const res = await fetch(url)
  const data = await res.json()

  return Promise.resolve({ evolutionChain: data })
}