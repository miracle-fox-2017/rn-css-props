import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import WelcomeScreen from './screens/welcome'
import MainScreen from './screens/main'
import GameOver from './screens/gameover'

const AppNavigator = StackNavigator({
  welcome: {
    screen: WelcomeScreen
  },
  main: {
    screen: MainScreen
  },
  gameover: {
    screen: GameOver
  }
})

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
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
