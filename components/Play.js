import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Play extends Component {
  static navigationOptions = () => ({
    title : 'Guess CSS Props'
  });
  constructor(){
    super();
    this.state = {
      choosedWord : ''
    }
    this.randomWords = [
      'background', 'border', 'clear', 'cursor', 'display',
      'flex', 'font', 'grid', 'height', 'width'
    ]
    this.letter = ['A','B','C','D','E','F','G','I','J','K','L',
      'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
    ]
  }
  componentWillMount(){
    this.chooseRandom()
  }
  chooseRandom(){
    const selectRandomIndex = Math.floor(Math.random() * this.randomWords.length);
    this.setState({
      choosedWord : this.randomWords[selectRandomIndex]
    });
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>{this.state.choosedWord}</Text>
        <View style={styles.keyboard}>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  },
  keyboard : {
  }
});

export default Play;
