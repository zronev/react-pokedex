import React from 'react'
import Header from './components/Header'
import Pokedex from './components/Pokedex'
import Menu from './components/Menu'
import Grid from './components/Grid'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Favorites from './components/Favorites'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />

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
            <h1>Hello!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
