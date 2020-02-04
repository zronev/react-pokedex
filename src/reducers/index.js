import { combineReducers } from 'redux'
import { pokemonIDReducer } from './pokemonIDReducer'
import { setNameReducer } from './setNameReducer'
import { toggleDataReducer } from './toggleDataReducer'
import { offsetReducer } from './offsetReducer'
import { likedReducer } from './likedReducer'
import { limitReducer } from './limitReducer'
import { loadPokemonReducer } from './loadPokemonReducer'
import { loadPokemonsReducer } from './loadPokemonsReducer'
import { loadSpeciesReducer } from './loadSpeciesReducer'
import { loadEvolutionReducer } from './loadEvolutionReducer'
import { comparedReducer } from './comparedReducer'

const pokemons = loadPokemonsReducer
const pokemon = loadPokemonReducer
const speciesData = loadSpeciesReducer
const evolutionChain = loadEvolutionReducer

const chartType = toggleDataReducer('chartType')
const side = toggleDataReducer('side')
const menu = toggleDataReducer('menu')
const showLiked = toggleDataReducer('showLiked')
const search = toggleDataReducer('SEARCH')
const showSearchResult = toggleDataReducer('SHOW_SEARCH_RESULT')
const showFilteredResult = toggleDataReducer('SHOW_FILTERED_RESULT')
const theme = toggleDataReducer('TOGGLE_THEME')

const id = pokemonIDReducer
const name = setNameReducer
const offset = offsetReducer
const limit = limitReducer
const liked = likedReducer
const toCompare = comparedReducer

export const rootReducer = combineReducers({
  pokemons,
  pokemon,
  speciesData,
  evolutionChain,
  id,
  name,
  liked,
  offset,
  limit,
  search,
  theme,
  showLiked,
  showSearchResult,
  showFilteredResult,
  menu,
  chartType,
  side,
  toCompare,
})
