import React, { Component } from 'react';
import Nav from 'components/shared/Nav';

export default class AppContainer extends Component {
  render() {
    return (
      <div>
        <nav>
          <Nav />
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}
