import { combineReducers } from 'redux'
import { getAsyncDataReducer } from './getAsyncDataReducer'
import { pokemonIDReducer } from './pokemonIDReducer'
import { setNameReducer } from './setNameReducer'
import { toggleDataReducer } from './toggleDataReducer'
import { offsetReducer } from './offsetReducer'
import { likedReducer } from './likedReducer'
import { limitReducer } from './limitReducer'

const pokemons = getAsyncDataReducer('pokemons')
const pokemon = getAsyncDataReducer('pokemon')
const species = getAsyncDataReducer('species')
const evolutionChain = getAsyncDataReducer('evolutionChain')
const chartType = toggleDataReducer('chartType')
const side = toggleDataReducer('side')
const animation = toggleDataReducer('animation')
const menu = toggleDataReducer('menu')
const showLiked = toggleDataReducer('showLiked')
const id = pokemonIDReducer
const name = setNameReducer
const offset = offsetReducer
const limit = limitReducer
const liked = likedReducer

export const rootReducer = combineReducers({
  pokemons,
  pokemon,
  species,
  evolutionChain,
  id,
  name,
  liked,
  offset,
  limit,
  showLiked,
  menu,
  chartType,
  animation,
  side,
})
