import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import thunk from 'redux-thunk';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

import {HEADER} from './src/components/common'


export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
      <View>
        <HEADER headerText='Manager' />
      </View>
      </Provider>
    );
  }
}
