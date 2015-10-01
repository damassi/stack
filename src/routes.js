import React from 'react';
import { Router, Route } from 'react-router';
import AppLayout from 'components/AppLayout';
import Login from 'components/Login';
import Users from 'components/Users';

const routes = (
  <Router component={AppLayout}>
    <Route path="/" component={Login} />
    <Route path="login" component={Login} />
    <Route path="users" component={Users} />
  </Router>
);

export default routes;
