import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as userActions from 'actions/usersActions';
import UserList from 'components/users/UserList';

@connect(state => ({
  loading: false
}))
export default class UsersContainer extends Component {

  static propTypes = {
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  render() {
    const { loading } = this.props;

    return (
      <div>
        { loading
          ? <div />
          : <UserList /> }
      </div>
    );
  }
}
