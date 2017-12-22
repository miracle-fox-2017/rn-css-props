import React from 'react'
import { View, Text} from 'react-native'
import { StackNavigator } from 'react-navigation'
import LoginScreen from './loginScreen.js'
import MainScreen from './mainScreen.js'
import WinPage from './winPage.js'

// const MainScreen = ({ navigation }) => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>{navigation.state.params.username}</Text>
//   </View>
// )

const RootDrawer = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
     headerTitle: 'Login'
   }
  },
  Main: {
    screen: MainScreen,
    navigationOptions: {
     headerTitle: `Let's Play`
   }
  }
  ,
  WinPage: {
    screen: WinPage,
    navigationOptions: {
     headerTitle: `You Win`
   }
  }
})

export default RootDrawer
