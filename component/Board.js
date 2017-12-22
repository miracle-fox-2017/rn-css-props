import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default class Board extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{width: 300, height: 300}}>
          <View style={{ flex:1, flexDirection: 'row', backgroundColor: 'green'}}/>
        </View>
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
  },
});