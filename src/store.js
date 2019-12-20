import { getAsyncDataReducer } from './reducers'
import { createStore, combineReducers } from 'redux'

const pokemons = getAsyncDataReducer('pokemons')
const rootReducer = combineReducers({ pokemons })

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
