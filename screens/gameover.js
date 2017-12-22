/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export default class GameOver extends Component {
  static navigationOptions = {
    title: 'Guess CSS Props'
  }

  render() {
    let content
    return (
      <View style={styles.container}>
        {this.props.navigation.state.params.status == 'menang' ?
          <Text>Yay! You Win</Text>
          :
          <Text>Oh no, you lost :(</Text>
        }
        <Button title='Play Again' onPress={() => this.props.navigation.navigate('main', {request: 'play'})}/>
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
