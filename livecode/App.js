import React from 'react'
import {
  Text
} from 'react-native'
import {
  StackNavigator
} from 'react-navigation'
import { Provider } from 'react-redux'

import FirstScreen from './FirstScreen'
import GameScreen from './GameScreen'
import GameOver from './GameOver'

import store from './store'

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
      <Provider store = {store}>
        <BasicApp/>
      </Provider>
    )
  }
}

export default TitleScreen
