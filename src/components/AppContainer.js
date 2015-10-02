import React, { Component } from 'react'
import Nav from 'components/shared/Nav'
import styles from 'components/AppContainer.scss'

export default class AppContainer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <nav>
          <Nav />
        </nav>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
