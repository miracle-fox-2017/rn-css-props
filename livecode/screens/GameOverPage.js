import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class GameOver extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 40 }}>Game Over</Text>
      </View>
    )
  }
}