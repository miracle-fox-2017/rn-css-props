import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
// import HomeScreen from './HomeScreen'
// import DetailScreen from './DetailScreen'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Livecode Phase 3 - Septian @fujianto</Text>
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
