import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import User from 'components/users/User';

export class UserList extends Component {

  static propTypes = {
    users: ImmutablePropTypes.list.isRequired
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        <h3>
          Users
        </h3>
        <ul>
          { users && users.map((user, index) => {
            return (
              <User
                name={user.get('name')}
                key={`user-${index}`}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({
  users: state.users.get('users')
}))(UserList);