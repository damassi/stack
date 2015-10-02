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
      <div>
        <h3>
          Log In
        </h3>

        <button onClick={::this.handleClick}>
          Logged In: {loggedIn.toString()}
        </button>
      </div>
    );
  }
}

export default connect(state => ({
  loggedIn: state.session.get('loggedIn'),
}))(Login);
