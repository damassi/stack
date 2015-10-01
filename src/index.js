import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createHistory } from 'history';

const rootRoute = {
  component: 'div',
  childRoutes: [{
    path: '/',
    component: require('components/App'),
    childRoutes: [
      require('routes/login'),
      require('routes/users')
    ]
  }]
};

ReactDOM.render(
  <Router
    history={createHistory()}
    routes={rootRoute}
  />
, document.getElementById('root'));
