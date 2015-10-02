import React, { Component } from 'react';
import * as sessionActions from 'actions/sessionActions';

export class LoginForm extends Component {

  handleLoginClick() {
    this.props.dispatch(sessionActions.login());
  }

  handleLogoutClick() {
    this.props.dispatch(sessionActions.logout());
  }

  render() {
    return (
      <div>
        <button onClick={::this.handleLoginClick}>
          Login
        </button>
        <button onClick={::this.handleLogoutClick}>
          Logout
        </button>
      </div>
    );
  }
}
