import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'
import { saveToLocalStorage, loadFromLocalStorage } from './modules/localStorage'

const persistedState = loadFromLocalStorage()
if (persistedState !== undefined) {
  persistedState.id = 1
  persistedState.name = ''
  persistedState.offset = 0
  persistedState.limit = 20
  persistedState.side = false
  persistedState.menu = false
}

const middleware = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(...middleware)),
)

store.subscribe(() => saveToLocalStorage(store.getState()))
