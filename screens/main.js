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
      shuffle: '',
      turnleft: ''
    }
  }

  static navigationOptions = {
    title: 'Guess CSS Props'
  }

  componentWillMount() {
    if(!this.state.playWord) {
      let randomWord = Math.floor(Math.random()*this.state.words.length)
      let words = this.state.words
      let result = words[randomWord]
      let shuffle = this.shuffle(result.split('')).join(',')
      let turnleft = result.length
      this.setState({
        playWord: result,
        shuffle: shuffle,
        turnleft: turnleft
      })
    }
  }

  compareWord(guess) {
    if(guess == this.state.playWord) {
      alert('menang')
    } else {
      alert('salah')
    }
  }

  setGuess(input) {
    let guess = this.state.guess
    let turnleft = this.state.turnleft - 1
    if(this.state.playWord.length === turnleft){
      this.compareWord(guess)
    } else {
      guess.push(input)
      this.setState({
        guess: guess,
        turnleft: turnleft
      })
    }
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  render() {
    let guess = this.state.guess
    let button = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let used = this.state.shuffle
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 18}}>{guess}</Text>
        <View>
          <Text>Used: {used}</Text>
          <Text>Turn Left: {this.state.turnleft}</Text>
          <Text>Game Status: {used}</Text>
        </View>
        <View style={{flexDirection: 'row', flexWrap:'wrap'}}>
          {button.map((b, i) => {
            return <Button style={{margin: 20}} title={b} key={i} onPress={() => this.setGuess(b)}/>
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
  button: {

  }
});
