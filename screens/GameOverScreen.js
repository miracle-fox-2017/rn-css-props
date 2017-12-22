import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class GameOverScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <View>
        <Text>Guess CSS Props</Text>

        <Text>WIN</Text>

        <TouchableOpacity>
          <Text>Play Again</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default GameOverScreen