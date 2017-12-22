import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home'
import Boardgame from './Boardgame'

export default class App extends React.Component {
  render() {
    const Navigasi = StackNavigator({
      Home: {screen: Home},
      Boardgame: {screen: Boardgame}
    })
    return (
      <Navigasi />
    );
  }
}
