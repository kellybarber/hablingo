import React, { Fragment }           from 'react'
import { BrowserRouter, Switch }     from 'react-router-dom'
import { PrivateRoute, PublicRoute } from '../helpers/routing'

import Header    from 'Components/Header/Header'
import Login     from 'Sections/Login/Login'
import Register  from 'Sections/Register/Register'
import Dashboard from 'Sections/Dashboard/Dashboard'

export default () => (
  <BrowserRouter>
    <Fragment>
      <Header/>
      <Switch>
        <PublicRoute path='/login' component={Login}/>
        <PublicRoute path='/register' component={Register}/>
        <PrivateRoute path='/dashboard' component={Dashboard}/>
      </Switch>
    </Fragment>
  </BrowserRouter>
)