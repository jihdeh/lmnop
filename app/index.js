import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

import configureStore from './store/configureStore';

import Router from './containers/Router';

// This app doesn't use actual APIs or dynamic data currently,
// but feel free to take this app as a starting point and build it out


const store = configureStore((state) => fromJS(state));
// const store = createStore((state) => state, initialState)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}
