import React from 'react';
import {Provider} from 'react-redux'
import store from './store'
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home'
import Boardgame from './Boardgame'
import Hasil from './Hasil'

export default class App extends React.Component {
  render() {
    const Navigasi = StackNavigator({
      Home: {screen: Home},
      Hasil: {screen: Hasil},
      Boardgame: {screen: Boardgame},
    })
    return (
      <Provider store={store}>
        <Navigasi />
      </Provider>
    );
  }
}
