import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Board from './component/Board'
import { StackNavigator } from 'react-navigation'
import Home from './component/Home'

const Navigator = StackNavigator({
  home: { screen: Home },
  board: {screen: Board}
})
export default class App extends React.Component {
  
  render() {
    return (
     
        <Navigator />
     
    );
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
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
