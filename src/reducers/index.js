import { combineReducers } from 'redux'
import { getAsyncDataReducer } from './getAsyncDataReducer'

const pokemons = getAsyncDataReducer('pokemons')
const pokemon = getAsyncDataReducer('pokemon')

export const rootReducer = combineReducers({ pokemons, pokemon })
