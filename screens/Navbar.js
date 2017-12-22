import React from 'react'
import {View, Text, Button} from 'react-native'
import {StackNavigator,NavigationAction} from 'react-navigation'

import MainMenu from './mainMenu'
import BoardGame from './board'

const RootNavigator = StackNavigator({
  Main : {
    screen : MainMenu,
    navigationOptions:{
      headerTitle:'Main'
    }
  }
  // ,
  // Board :{
  //   screen: BoardGame,
  //   navigationOptions:{
  //     headerTitle:'Board'
  //   }
  // }
})

export default RootNavigator