import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import LoginForm from 'components/login/LoginForm'

@connect(state => ({
  loggedIn: state.session.get('loggedIn')
}))
export default class LoginContainer extends Component {

  static propTypes = {
    loggedIn: PropTypes.bool.isRequired
  }

  render() {
    const { loggedIn } = this.props

    return (
      <div>
        <h3>
          Logged In: {loggedIn.toString()}
        </h3>

        <LoginForm />
      </div>
    )
  }
}
