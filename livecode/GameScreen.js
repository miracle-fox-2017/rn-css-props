import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class GameScreen extends Component<{}> {
  
  constructor(props) {
    super()
    let currentWord = props.words[Math.floor(Math.random() * props.words.length)]
    let correctLetterInit = ''
    
    for (let i = 0; i < currentWord.length; i++) {
      correctLetterInit += '_ '
    }
    
    this.state = {
      word: currentWord,
      letters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
      correctLetter: '',
      emptywords : correctLetterInit,
      usedLetter: []
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.question}>{this.state.correctLetter}</Text>
        <Text style={styles.question}>{this.state.emptywords}</Text>
        <View style={styles.board}>
          {this.state.letters.map((letter, i) => {
            if (this.state.usedLetter.indexOf(letter) === -1)
            return (
              <TouchableOpacity key={i} onPress={() => this.check(letter)}><Text style ={styles.cell}>{letter}</Text></TouchableOpacity>
            )
            else {
              return (
                <Text key={i} style ={styles.usedCell}>{letter}</Text>
              )
            }
          })}
        </View>
      </View>
    )
  }
  
  check (letter) {
    let correctLetterNew = this.state.correctLetter;
    let usedLetterNew = this.state.usedLetter
    if (this.state.word.indexOf(letter) > -1) {
      correctLetterNew += letter
      this.setState({
        correctLetter: correctLetterNew
      })
    }
    else {
      console.log("salah");
    }
    
    usedLetterNew.push(letter)
    this.setState({
      usedLetter: usedLetterNew
    })
    
    if (correctLetterNew.length === this.state.word.length) {
      const { navigate  } = this.props.navigation
      navigate('GameEnd')
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  board: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  cell: {
    width: (Dimensions.get('window').width/8),
    height: (Dimensions.get('window').height/25),
    backgroundColor: 'skyblue',
    marginHorizontal: Dimensions.get('window').width/220,
    marginVertical: Dimensions.get('window').height/20,
    fontSize: 20
  },
  question: {
    fontSize: 50
  },
  usedCell: {
    width: (Dimensions.get('window').width/8),
    height: (Dimensions.get('window').height/25),
    backgroundColor: 'red',
    marginHorizontal: Dimensions.get('window').width/220,
    marginVertical: Dimensions.get('window').height/20,
    fontSize: 20
  }
});

const mapStateToProps = state => {
  return {
    words: state.words
  }
}

const mapDispatchToProps = null

const connectedGameScreen = connect(mapStateToProps,mapDispatchToProps)(GameScreen)
export default connectedGameScreen
