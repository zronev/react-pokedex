import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Pokedex from './components/Pokedex'
import Menu from './components/Menu'
import Grid from './components/Grid'
import Favorites from './components/Favorites'
import About from './components/About'
import Search from './components/Search'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />
        <Search />

        <Switch>
          <Route exact path="/">
            <Pokedex />
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
