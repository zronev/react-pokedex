import { combineReducers } from 'redux'
import { getAsyncDataReducer } from './getAsyncDataReducer'
import { pokemonIDReducer } from './pokemonIDReducer'

const pokemons = getAsyncDataReducer('pokemons')
const pokemon = getAsyncDataReducer('pokemon')

export const rootReducer = combineReducers({ pokemons, pokemon, id: pokemonIDReducer })
