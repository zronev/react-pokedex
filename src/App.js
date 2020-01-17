import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Pokedex from './components/Pokedex'
import Menu from './components/Menu'
import Grid from './components/Grid'
import Favorites from './components/Favorites'
import About from './components/About'
import Search from './components/Search'
import SearchResult from './components/SearchResult'
import { useSelector } from 'react-redux'

function App() {
  const name = useSelector(state => state.name)

  return (
    <Router basename="/react-pokedex">
      <div className="App">
        <Header />
        <Menu />
        <Search />

        <Switch>
          <Route exact path="/">
            {name && <SearchResult />}
            {!name && <Pokedex />}
          </Route>

          <Route path="/grid">
            <Grid />
          </Route>

          <Route path="/favorites">
            <Favorites />
          </Route>

          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
