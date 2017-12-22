import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { fetchRandomWords, addInputWord } from '../actions/gameAction'

class GameScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      usedWords:[],
      turnLeft: 5,
      count: 5,
      question: '',
      gameWin: false,
      randomWords: [
        'background',
        'border',
        'clear',
        'cursor',
        'display'
      ],
      alphabet:[
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
      ],
      boxes: [
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null, null, null
      ]
    }
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

  getRandomQuiz() {
    const randomQuiz = this.state.randomWords

    return this.state.randomWords[this.getRandomIntInclusive(0, randomQuiz.length - 1)]
  }

  setPressed(index) {
    const boxes = this.state.boxes;
    const { navigate } = this.props.navigation

    let newUsed = []
    newUsed.push(this.state.alphabet[index])    

    this.setState({
      usedWords: this.state.usedWords.concat(newUsed),
      count: this.state.count - 1
    })

    let newBoxColor = this.state.boxes;
    newBoxColor[index] = true

    this.props.setInputWord(this.state.alphabet[index])
    
    if (this.state.count <= 0) {
      navigate('GameOver', { win: this.state.gameWin ? 'WIN' : 'LOSE' })
    } else {
      console.log(`Quiz-----------: ${this.state.question}`)
      console.log(`USED WORD-----------: ${this.state.usedWords.join('')}`)
      
      const quiz = this.state.question
      const usedWords = this.state.usedWords.join('')

      if (quiz == usedWords) {
        this.setState({
          gameWin: true
        })
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Guess CSS Props</Text>

        <View style={styles.container}>
          <Text style={styles.title}>{this.state.question}</Text>
          <Text>Used: {this.props.usedWords} </Text>
          <Text>Turns Left: {this.state.count}</Text>
          <Text>Game status: good guess</Text>
        </View>

        <View style={styles.board}>
          {
            this.state.alphabet.map((item, index) => {
              return (
                <TouchableOpacity key={index} style={styles.box} onPress={() => this.setPressed(index)}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item}</Text>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
    )
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      randomWords : nextProps.randomWords,
      turnLeft: nextProps.turnLeft
    })
  }

  componentDidMount() {
    this.props.loadRandomWords(this.state.randomWords)

    this.setState({
      question: this.getRandomQuiz()
    })
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
  },

  board: {
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 'auto',
    marginTop: '10%'
  },

  box: {
    backgroundColor: 'lightgreen',
    margin: '1%',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const mapStateToProps = (state) => {
  return {
    randomWords: state.gameReducer.randomWords,
    usedWords: state.gameReducer.usedWords,
    turnLeft: state.gameReducer.turnLeft
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadRandomWords: (randomWords) => dispatch(fetchRandomWords(randomWords)),
    setInputWord: (word) => dispatch(addInputWord(word))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen)