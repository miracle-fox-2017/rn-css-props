import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import store from './store'
import {
  StackNavigator
} from 'react-navigation'
import Welcome from './screens/Welcome';
import Game from './screens/Game';
import Win from './screens/Win';

const NavigationBase = StackNavigator({
  Welcome: { screen: Welcome },
  Game: { screen: Game },
  Win: { screen: Win }
})

export default class App extends React.Component {
  render() {
    return (
      // <Provider store={store}>
      <NavigationBase />
      // </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
