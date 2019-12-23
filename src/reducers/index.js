import { combineReducers } from 'redux'
import { getAsyncDataReducer } from './getAsyncDataReducer'
import { pokemonIDReducer } from './pokemonIDReducer'
import { chooseChartTypeReducer } from './chooseChartTypeReducer'

const pokemons = getAsyncDataReducer('pokemons')
const pokemon = getAsyncDataReducer('pokemon')
const species = getAsyncDataReducer('species')

export const rootReducer = combineReducers({
  pokemons,
  pokemon,
  species,
  id: pokemonIDReducer,
  chartType: chooseChartTypeReducer,
})
