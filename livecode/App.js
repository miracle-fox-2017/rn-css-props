import React from 'react'
import {
  Text
} from 'react-native'
import {
  StackNavigator
} from 'react-navigation'

import FirstScreen from './FirstScreen'
import GameScreen from './GameScreen'
import GameOver from './GameOver'

const BasicApp = StackNavigator({
  SplashScreen: {screen: FirstScreen},
  Main: {screen: GameScreen},
  GameEnd: {screen: GameOver}
})

class TitleScreen extends React.Component {
  constructor() {
    super()
  }
  
  render(){
    return(
      <BasicApp/>
    )
  }
}

export default TitleScreen
