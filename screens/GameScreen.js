import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class GameScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <View>
        <Text>Guess CSS Props</Text>

        <TouchableOpacity>
          <Text>BOARD</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default GameScreen