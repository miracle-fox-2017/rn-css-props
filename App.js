import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './screens/Navbar'

export default class App extends React.Component {
  constructor(){
    super()
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
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
  },
});
