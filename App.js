import React from 'react';
import { AppRegistry,StyleSheet, Text, View } from 'react-native';
import Navbar from './screens/Navbar'
import Main from './screens/MainMenu'
import BoardGame from './screens/BoardGame'
import {StackNavigator, NavigationActions} from 'react-navigation'

export default class App extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Main/> */}
        {/* <Navbar/> */}
        <BoardGame/>
        {/* <Text>ini app</Text> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

