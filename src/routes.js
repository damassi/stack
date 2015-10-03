import React from 'react'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import AppContainer from 'components/AppContainer'
import LoginContainer from 'components/login/LoginContainer'
import UsersContainer from 'components/users/UsersContainer'

const routes = (
  <Router history={createBrowserHistory()}>
    <Route component={AppContainer}>
      <Route path="/" component={LoginContainer} />
      <Route path="login" component={LoginContainer} />
      <Route path="users" component={UsersContainer} />
    </Route>
  </Router>
)

export default routes
