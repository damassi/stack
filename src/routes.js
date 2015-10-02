import React from 'react';
import { Router, Route } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import AppContainer from 'components/AppContainer';
import LoginContainer from 'components/login/LoginContainer';
import UsersContainer from 'components/users/UsersContainer';

const routes = (
  <Router component={AppContainer} history={createHashHistory()}>
    <Route path="/" component={LoginContainer} />
    <Route path="login" component={LoginContainer} />
    <Route path="users" component={UsersContainer} />
  </Router>
);

export default routes;
