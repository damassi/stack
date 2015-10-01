export default {
  component: 'div',
  childRoutes: [{
    path: '/',
    component: require('modules/app/components/AppContainer'),
    childRoutes: [
      require('modules/login/route'),
      require('modules/users/route')
    ]
  }]
};
