import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from 'Sections/Home/Home'

export default () => (
  <BrowserRouter>
    <div class='app-container'>
      <Switch>
        <Route path='/' component={Home}/>
      </Switch>
    </div>
  </BrowserRouter>
)