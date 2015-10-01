import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from 'utils/redux';

const store = configureStore();

export default class App extends Component {
  render() {
    console.log('here');
    return (
      <div>
        <Provider store={store}>
          <div>hi</div>
        </Provider>
      </div>
    );
  }
}
