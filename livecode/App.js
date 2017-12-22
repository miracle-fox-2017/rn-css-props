import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import WelcomePage from './screens/WelcomePage'
import MainPage from './screens/MainPage'
import GameOverPage from './screens/GameOverPage'


export default class App extends React.Component {

  render() {
    const ScreenNavigation = StackNavigator({
      Welcome: { screen: WelcomePage },
      MainPage: { screen: MainPage },
      GameOver: { screen: GameOverPage }
    })
    return (
      <View style={styles.container}>
        <ScreenNavigation />
      </View>
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
