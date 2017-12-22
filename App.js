import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screen/HomeScreen'
// import { Provider } from 'react-redux'
// import store from './store'

import {
  StackNavigator,
} from 'react-navigation';

const Apps = StackNavigator({
  Home: { screen: HomeScreen },
});

export default class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Apps />
    )
  }
}
