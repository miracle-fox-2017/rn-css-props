import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

export default class WelcomeScreen extends Component {
  static navigationOptions = {
    title: 'Guess CSS Props'
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='New Game' onPress={() => this.props.navigation.navigate('main', {})}/>
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
