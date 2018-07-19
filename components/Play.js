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
      typedLetter : [],
      turnsLeft : 0
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
    const randomWord = this.randomWords[selectRandomIndex].split('');
    const blankField = [];
    for(let i = 0; i < randomWord.length; i++){
      blankField.push('_');
    }
    this.setState({
      choosedWord : randomWord,
      typedLetter : blankField,
      turnsLeft : randomWord.length + 4
    });
  }
  pressButton(letter){
    const checkSelected = this.state.choosedWord.map((each,i) => {
      if(each === letter.toLowerCase() || this.state.typedLetter[i] !== '_'){
        return each
      }
    });
    const editCheck = checkSelected.map(each => {
      if(each == undefined){
        each = '_'
      }
      return each
    });
    this.setState({
      typedLetter : editCheck,
      turnsLeft : this.state.turnsLeft - 1
    },() => {
      console.log(this.state.choosedWord);
      if(this.state.typedLetter.indexOf('_') === -1){
        this.props.navigation.navigate('End');
      }
    });
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.fill}>{this.state.typedLetter.join(' ')}</Text>
        <Text style={{fontSize : 20}}>Turns Left : {this.state.turnsLeft}</Text>
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
