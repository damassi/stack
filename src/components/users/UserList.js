import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import User from 'components/users/User';

export class UserList extends Component {

  static propTypes = {
    users: PropTypes.array.isRequired
  }

  render() {
    const { users } = this.props;

    return (
      <ul>
        { users && users.map((user, index) => {
          return (
            <User
              {...user}
              key={`user-${index}`}
            />
          );
        })}
      </ul>
    );
  }
}

export default connect(state => ({
  users: state.users.users
}))(UserList);
