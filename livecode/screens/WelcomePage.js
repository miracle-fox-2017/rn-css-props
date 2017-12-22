import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class WelcomePage extends React.Component {

  render () {
    return (
      <View>
        <Text style={{fontSize: 30}}>WELCOME TO THE GAME</Text>
      </View>
    )
  }
}