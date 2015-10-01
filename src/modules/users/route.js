export default {
  path: 'users',

  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('modules/users/components/UsersContainer'));
    });
  }
};
