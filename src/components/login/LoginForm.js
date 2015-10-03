import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as sessionActions from 'actions/sessionActions'

export class LoginForm extends Component {

  static propTypes = {
    loggedIn: PropTypes.bool.isRequired
  }

  handleLoginClick() {
    this.props.dispatch(sessionActions.login())
  }

  handleLogoutClick() {
    this.props.dispatch(sessionActions.logout())
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
    )
  }
}

export default connect(state => ({
  loggedIn: state.session.get('loggedIn'),
}))(LoginForm)
