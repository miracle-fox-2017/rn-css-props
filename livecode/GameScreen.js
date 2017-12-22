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
    this.state = {
      word: currentWord,
      letters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
      guessedWord: '',
      usedLetter: []
    }
  }
  
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.question}>{this.state.word}</Text>
        <View style={styles.board}>
          {this.state.letters.map((letter, i) => {
            if (this.state.usedLetter.indexOf(letter) === -1)
            return (
              <TouchableOpacity key={i} onPress={() => this.check(letter)}><Text style ={styles.cell}>{letter}</Text></TouchableOpacity>
            )
            else {
              return (
                <TouchableOpacity key={i}><Text style ={styles.usedCell}>{letter}</Text></TouchableOpacity>
              )
            }
          })}
        </View>
      </View>
    )
  }
  
  check (letter) {
    if (this.state.word.indexOf(letter) > -1) {
      console.log("benar")
    }
    else {
      console.log("salah")
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  board: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    // alignItems: 'center'
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

// <View style= {styles.board}>
//     <TouchableOpacity onPress={() => this.changeColumn(0) }><Text style ={styles.cell}>{this.state.cells[0]}</Text></TouchableOpacity>
//     <TouchableOpacity onPress={() => this.changeColumn(1) }><Text style ={styles.cell}>{this.state.cells[1]}</Text></TouchableOpacity>
//     <TouchableOpacity onPress={() => this.changeColumn(2) }><Text style ={styles.cell}>{this.state.cells[2]}</Text></TouchableOpacity>
//     <TouchableOpacity onPress={() => this.changeColumn(3) }><Text style ={styles.cell}>{this.state.cells[3]}</Text></TouchableOpacity>
//     <TouchableOpacity onPress={() => this.changeColumn(4) }><Text style ={styles.cell}>{this.state.cells[4]}</Text></TouchableOpacity>
//     <TouchableOpacity onPress={() => this.changeColumn(5) }><Text style ={styles.cell}>{this.state.cells[5]}</Text></TouchableOpacity>
//     <TouchableOpacity onPress={() => this.changeColumn(6) }><Text style ={styles.cell}>{this.state.cells[6]}</Text></TouchableOpacity>
//     <TouchableOpacity onPress={() => this.changeColumn(7) }><Text style ={styles.cell}>{this.state.cells[7]}</Text></TouchableOpacity>
//     <TouchableOpacity onPress={() => this.changeColumn(8) }><Text style ={styles.cell}>{this.state.cells[8]}</Text></TouchableOpacity>
// </View>

const mapStateToProps = state => {
  return {
    words: state.words
  }
}

const mapDispatchToProps = null

const connectedGameScreen = connect(mapStateToProps,mapDispatchToProps)(GameScreen)
export default connectedGameScreen
