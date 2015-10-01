import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { login } from 'modules/login/actions/loginActions';

@connect(state => ({
  loggedIn: state.login.loggedIn,
}))
export default class Login extends Component {

  static propTypes = {
    loggedIn: PropTypes.bool
  }

  handleClick() {
    this.props.dispatch(login());
  }

  render() {
    const { loggedIn } = this.props;

    return (
      <div onClick={::this.handleClick}>
        Login {loggedIn}

        <img src='assets/images/img.png' />
      </div>
    );
  }
}
