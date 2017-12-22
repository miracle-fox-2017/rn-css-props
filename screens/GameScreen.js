import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

class GameScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Guess CSS Props</Text>

        <View style={styles.container}>
          <Text style={styles.title}>Tebakan</Text>
          <Text>Used: </Text>
          <Text>Game status: good guess</Text>
        </View>

        

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

  title: {
    fontSize: 20,
  }
});

export default GameScreen