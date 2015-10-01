import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getUsers } from 'actions/appActions';

export class Users extends Component {

  static propTypes = {
    users: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.dispatch(getUsers());
  }

  render() {
    const { loading } = this.props;

    return (
      <div>
        { loading
          ? <Preloader />
          : <UserList /> }
      </div>
    );
  }
}

export default connect(state => ({
  loading: state.app.loading,
}))(Users);
