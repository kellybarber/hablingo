import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Dashboard from '../components/Dashboard/Dashboard'

export default () => (
  <BrowserRouter>
    <div class='app-container'>
      <Switch>
        <Route path='/' component={Dashboard}/>
      </Switch>
    </div>
  </BrowserRouter>
)