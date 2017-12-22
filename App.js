import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './screens/Navbar'
import Main from './screens/MainMenu'
import BoardGame from './screens/BoardGame'

export default class App extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <View >
      {/* <Main/> */}
        <Navbar/>
        {/* <BoardGame/> */}
        {/* <Text>ini app</Text> */}
      </View>
    );
  }
}


