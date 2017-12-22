import React from 'react'
import { View, Text} from 'react-native'
import { StackNavigator } from 'react-navigation'
import LoginScreen from './loginScreen.js'

const MainScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Main Screen</Text>
  </View>
)

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
})

export default RootDrawer
