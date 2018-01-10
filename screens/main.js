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
        'coba',
        'latihan',
        'main',
        'bisa',
        'react',
        'redux',
        'acak'
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
        turnleft: turnleft,
        wordLength: turnleft
      })
    }
  }

  compareWord(guess) {
    console.log(guess)
    if(guess === this.state.playWord) {
      this.props.navigation.navigate('gameover', {status: 'menang'})
    } else {
      this.props.navigation.navigate('gameover', {status: 'kalah'})
    }
  }

  setGuess(input) {
    let guess = this.state.guess
    let turnleft = this.state.turnleft - 1
    guess.push(input)
    if(turnleft === 0){
      this.compareWord(guess.join(''))
    } else {
      this.setState({
        guess: guess,
        turnleft: turnleft,
        [input]: false
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
        <Text style={{fontSize: 30}}>{guess}</Text>
        <View>
          <Text>Used: {used}</Text>
          <Text>Turn Left: {this.state.turnleft}</Text>
          <Text>Game Status: ''</Text>
        </View>
        <View style={{flexDirection: 'row', flexWrap:'wrap', alignItems: 'center', justifyContent: 'center'}}>
          {button.map((b, i) => {
            return <View key={i} style={{margin: 5}} ><Button style={{fontSize: 30}} disable={this.state[b]} title={b} onPress={() => this.setGuess(b)}/></View>
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
