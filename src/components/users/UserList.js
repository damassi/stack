import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export class UserList extends Component {

  static propTypes = {
    users: PropTypes.array.isRequired
  }

  render() {
    const { users } = this.props;

    return (
      <ul>
        { users.map((user, index) => {
          return (
            <li key={`user-${index}`}>
              {user}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default connect(state => ({
  users: state.app.users
}))(UserList);
