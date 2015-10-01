import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { login } from 'modules/login/actions/loginActions';

export class Login extends Component {

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
        Login {loggedIn.toString()}

        <img src='assets/images/img.png' />
      </div>
    );
  }
}

export default connect(state => ({
  loggedIn: state.app.loggedIn,
}))(Login);