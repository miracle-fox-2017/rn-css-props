import React,{Component} from 'react';
import {View, Text, Button, Dimensions, StyleSheet} from 'react-native';

class Play extends Component {
  static navigationOptions = () => ({
    title : 'Guess CSS Props'
  });
  constructor(){
    super();
    this.state = {
      choosedWord : [],
      typedLetter : '_ _ _ _ _ _'
    }
    this.randomWords = [
      'background', 'border', 'clear', 'cursor', 'display',
      'flex', 'font', 'grid', 'height', 'width'
    ]
    this.letter = ['A','B','C','D','E','F','G','H','I','J','K','L',
      'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
    ]
  }
  componentWillMount(){
    this.chooseRandom()
  }
  chooseRandom(){
    const selectRandomIndex = Math.floor(Math.random() * this.randomWords.length);
    const randomWord = this.randomWords[selectRandomIndex];
    const blankField = [];
    for(let i = 0; i < randomWord.length; i++){
      blankField.push('_');
    }
    this.setState({
      choosedWord : randomWord,
      typedLetter : blankField.join(' ')
    });
  }
  pressButton(letter){
    const checkSelected = this.state.choosedWord.indexOf(letter.toLowerCase());
    console.log(this.state.choosedWord);
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.fill}>{this.state.typedLetter}</Text>
        <View style={styles.keyboard}>
          {this.letter.map((letter,i) => {
            return(
              <View style={styles.keyboardButton} key={i}>
                <Text
                  style={{alignSelf : 'center', fontSize : 30}}
                  onPress={() => this.pressButton(letter)}>{letter}</Text>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  },
  fill : {
    fontSize : 40,
    marginBottom : 20
  },
  keyboard : {
    flexWrap : 'wrap',
    flexDirection: 'row'
  },
  keyboardButton : {
    width : '20%',
    marginBottom : 5,
    height : width * 0.12,
    justifyContent : 'center',
    backgroundColor : 'red'
  }
});

export default Play;
