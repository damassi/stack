import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from 'components/shared/Nav.scss'

export default class Nav extends Component {
  render() {
    return (
      <ul className={styles.nav}>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
      </ul>
    )
  }
}
