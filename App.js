import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screen/HomeScreen'
import MainScreen from './screen/MainScreen'
import FinishScreen from './screen/FinishScreen'
import { Provider } from 'react-redux'
import store from './store/store'

import {
  StackNavigator,
} from 'react-navigation';

const Apps = StackNavigator({
  Home: { screen: HomeScreen },
  Main: { screen: MainScreen },
  Finish: { screen: FinishScreen },
});

export default class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Provider store={store}>
        <Apps />
      </Provider>
    )
  }
}
