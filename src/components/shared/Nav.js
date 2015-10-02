import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to='login'>Login</Link>
        </li>
        <li>
          <Link to='users'>Users</Link>
        </li>
      </ul>
    );
  }
}
