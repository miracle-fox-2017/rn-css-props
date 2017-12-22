import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Board from './component/Board'

export default class App extends React.Component {
  render() {
    return (
     
        <Board />
     
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
