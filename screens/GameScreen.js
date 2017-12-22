import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { fetchRandomWords } from '../actions/gameAction'

class GameScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
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

  setPressed(index) {
    const boxes = this.state.boxes;

    alert(index)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Guess CSS Props</Text>

        <View style={styles.container}>
          <Text style={styles.title}>Tebakan</Text>
          <Text>Used: </Text>
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
    console.log(`NEXT PROPS------${nextProps.randomWords}`)

    this.setState({
      randomWords : nextProps.randomWords
    })
  }

  componentDidMount() {
    this.props.loadRandomWords(this.state.randomWords)
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadRandomWords: (randomWords) => dispatch(fetchRandomWords(randomWords))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen)