import React, { Component } from 'react';

export default class AppContainer extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
