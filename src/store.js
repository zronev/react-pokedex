import { createStore } from 'redux'
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

export const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ serialize: true, trace: true }),
)

store.subscribe(() => saveToLocalStorage(store.getState()))
