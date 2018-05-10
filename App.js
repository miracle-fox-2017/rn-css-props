import React from 'react';
import { AppRegistry,StyleSheet, Text, View } from 'react-native';
import Navbar from './screens/Navbar'
import MainMenu from './screens/MainMenu'
import BoardGame from './screens/BoardGame'
import {StackNavigator, NavigationActions} from 'react-navigation'

// const RootNavigator = StackNavigator({
//   main: { screen: MainMenu }
//   })

export default class App extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      
        <Navbar/>
       

      
        );
  }
}


