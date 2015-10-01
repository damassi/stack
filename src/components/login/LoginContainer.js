import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as sessionActions from 'actions/sessionActions';

export class Login extends Component {

  static propTypes = {
    loggedIn: PropTypes.bool
  }

  handleClick() {
    this.props.dispatch(sessionActions.login());
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
  loggedIn: state.session.loggedIn,
}))(Login);
