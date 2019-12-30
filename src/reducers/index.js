import { combineReducers } from 'redux'
import { getAsyncDataReducer } from './getAsyncDataReducer'
import { pokemonIDReducer } from './pokemonIDReducer'
import { setNameReducer } from './setNameReducer'
import { toggleDataReducer } from './toggleDataReducer'

const pokemons = getAsyncDataReducer('pokemons')
const pokemon = getAsyncDataReducer('pokemon')
const species = getAsyncDataReducer('species')
const evolutionChain = getAsyncDataReducer('evolutionChain')
const chartType = toggleDataReducer('chartType')
const side = toggleDataReducer('side')
const animation = toggleDataReducer('animation')

export const rootReducer = combineReducers({
  pokemons,
  pokemon,
  species,
  evolutionChain,
  id: pokemonIDReducer,
  name: setNameReducer,
  chartType,
  animation,
  side,
})
