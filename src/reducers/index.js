import { combineReducers } from 'redux'
import { getAsyncDataReducer } from './getAsyncDataReducer'
import { pokemonIDReducer } from './pokemonIDReducer'
import { chooseChartTypeReducer } from './chooseChartTypeReducer'
import { toggleAnimationReducer } from './toggleAnimation'
import { setNameReducer } from './setNameReducer'
import { switchSideReducer } from './switchSideReducer'

const pokemons = getAsyncDataReducer('pokemons')
const pokemon = getAsyncDataReducer('pokemon')
const species = getAsyncDataReducer('species')
const evolutionChain = getAsyncDataReducer('evolutionChain')

export const rootReducer = combineReducers({
  pokemons,
  pokemon,
  species,
  evolutionChain,
  id: pokemonIDReducer,
  name: setNameReducer,
  chartType: chooseChartTypeReducer,
  animation: toggleAnimationReducer,
  side: switchSideReducer,
})
