import React, { Component, PropTypes } from 'react';
import styles from 'components/users/User.scss';

export default class User extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    const { name } = this.props;

    return (
      <li className={styles.user}>
        {name}
      </li>
    );
  }
}
