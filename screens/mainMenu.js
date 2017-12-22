import React, { Component } from 'react'
import {StyleSheet,View,Text,Button} from 'react-native'
import Board from './board'

class MainMenu extends React.Component{

  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={styles.container}>
      {/* <Button
      title='New Game'
      onPress={() => this.props.navigation.navigate('Board')}/> */}
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>

    )
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

export default MainMenu