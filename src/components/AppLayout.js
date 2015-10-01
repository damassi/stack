import React, { Component } from 'react';

export default class AppLayout extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
