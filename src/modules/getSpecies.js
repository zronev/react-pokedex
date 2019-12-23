export const getSpecies = async url => {
  const res = await fetch(url)
  const data = await res.json()

  return Promise.resolve({ species: data })
}
