import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';

export default class MainScreen extends Component {
  constructor() {
    super()
    this.state = {
      words: [
        'percobaan',
        'latihan'
      ],
      playWord: '',
      guess: [],
    }
  }

  static navigationOptions = {
    title: 'Guess CSS Props'
  }

  componentWillMount() {
    let randomWord = Math.floor(Math.random()*this.state.words.length)
    let words = this.state.words
    this.setState({
      playWord: words[randomWord]
    })
  }

  render() {
    let guess = this.state.guess.length > 0 ? is.state.guess.split() : ''
    let button = 'abcdefghijklmnopqrstuvwxyz'.split('')
    return (
      <View style={styles.container}>
        <Text>{guess}</Text>
        <View style={{flexDirection: 'row', flexWrap:'wrap'}}>
          {button.map(b => {
            return <Button style={{margin: 10}} title={b} onPress={() => this.setGuess(b)}/>
          })}
        </View>
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
