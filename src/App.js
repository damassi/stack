import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { configureStore } from 'utils/redux'
import routes from 'routes'

const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {routes}
        </Provider>
      </div>
    )
  }
}
