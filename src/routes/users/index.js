export default {
  path: 'users',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('routes/users/containers/UsersContainer'));
    });
  }
};
