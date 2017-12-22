import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Guess CSS Props',
    headerStyle: {marginTop: 25}
  }

  render(){
    return (
      <View>
        <Button onPress={() => {this.props.navigation.navigate('board')}}
        title="Game Playe"></Button>
      </View>
    )
  }
}