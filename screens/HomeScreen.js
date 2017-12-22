import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default class HomeScreen extends Component {
  constructor(props) {
      super(props)
  
    this.state = {
  
    }
  }

  render() {
    const { navigate } = this.props.navigation
      
    return (
      <View style={styles.container}>
        <Text>Guess CSS Props</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigate('Game')}>
          <Text style={styles.title}>New Game</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    marginTop: 20,
    backgroundColor: 'orange',
    padding: 5,
  },

  title: {
    fontSize: 20,
  }
});