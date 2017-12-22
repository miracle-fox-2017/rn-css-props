import React from 'react'
import {View, Text, Button} from 'react-native'
import { StackNavigator } from 'react-navigation'

import MainMenu from './MainMenu'
import BoardGame from './BoardGame'
import Menang from './Menang'

const RootNavigator = StackNavigator({
  Main : {
    screen : MainMenu,
    navigationOptions:{
      headerTitle:'Main'
    }
  }
  ,
  Board : {
    screen: BoardGame,
    navigationOptions:{
    headerTitle: 'Board'
  }
  },
  Menang:{
    screen: Menang,
    navigationOptions:{
      headerTitle: 'Menang'
    }
  }
})

export default RootNavigator