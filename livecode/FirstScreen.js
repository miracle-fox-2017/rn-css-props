import React from 'react'
import {
  Button,
  View
} from 'react-native'


class FirstScreen extends React.Component{
  constructor(){
    super()
  }
  
  render() {
    return(
      <View>
        <Button title="Start Game" onPress = { () => navigate()}></Button>
      </View>
    )
  }
}

export default FirstScreen
