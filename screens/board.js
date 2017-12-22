import React, { Component } from 'react'
import { StyleSheet,View, Text, Button } from 'react-native'


class Board extends React.Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Board ini teh</Text>
        
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

export default Board