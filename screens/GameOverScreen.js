import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class GameOverScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const { navigate, state } = this.props.navigation
    const gameStatus = state.params.win;

    return (
      <View>
        <Text>Guess CSS Props</Text>

        <Text>You {gameStatus}</Text>

        <TouchableOpacity>
          <Text>Play Again</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default GameOverScreen