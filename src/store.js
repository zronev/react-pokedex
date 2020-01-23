import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'
import { saveToLocalStorage, loadFromLocalStorage } from './modules/localStorage'

const persistedState = loadFromLocalStorage()
if (persistedState !== undefined) {
  persistedState.name = ''
  persistedState.limit = 20
  persistedState.offset = 0
  persistedState.side = false
  persistedState.menu = false
  persistedState.search = false
  persistedState.showLiked = false
  persistedState.filterByTypes = []
}

const middleware = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(...middleware)),
)

store.subscribe(() => saveToLocalStorage(store.getState()))
