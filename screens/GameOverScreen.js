import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

class GameOverScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const { navigate, state } = this.props.navigation
    const gameStatus = state.params.win;
    console.log(`~~~gameStatus: `, gameStatus)
    return (
      <View style={styles.container}>
        <Text>Guess CSS Props</Text>

        <Text style={styles.title}>You {gameStatus}</Text>

        <TouchableOpacity>
          <Text>Play Again</Text>
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

  title: {
    fontSize: 20,
  },
});

export default GameOverScreen