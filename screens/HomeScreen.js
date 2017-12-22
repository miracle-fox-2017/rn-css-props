import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class HomeScreen extends Component {
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
          <Text>New Game</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
