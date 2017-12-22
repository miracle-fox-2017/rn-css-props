import React from 'react'
import {View, Text, Button} from 'react-native'
import { StackNavigator } from 'react-navigation'

import MainMenu from './MainMenu'
import BoardGame from './BoardGame'

const RootNavigator = StackNavigator({
  Home : {
    screen : MainMenu,
    navigationOptions:{
      headerTitle:'Home'
    }
  }
  ,
  Board :{
    screen: BoardGame,
    navigationOptions:{
    headerTitle: 'Home'
  }
  }
})

export default RootNavigator