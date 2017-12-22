import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Board extends React.Component {
  constructor() {
    super()
    this.state = {
      word: '',
      tempWords: [] 
    }
    
  }

  static navigationOptions = {
    title: 'Guess CSS Props',
    headerStyle: {marginTop: 25}
  }

  randomWord() {
    const random = [
      'backgroud',
      'clear',
      'cursor',
      'flex'
    ]

    let randomize = Math.floor(Math.random() * random.length) + 1
    let words = random[randomize]
    this.setState({
      word: words.split("")
    })
  }

  onPressLayout(id){
    let guess = this.state.word.indexOf(id) !== -1 ? this.state.word.indexOf(id) : ''
    let fill = this.state.word[guess]
    this.setState({
      tempWords: [fill]
    })
    
    
  }
  render() {
    console.log(this.state)
    return (
     
        
      

      <View style={styles.container}>
        
        <Text></Text>
        <View style={{width: 300, height: 150}}>
          <View style={{ flex:1, flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => {this.onPressLayout('a')}}>
              <View style={{width: 40, height: 40,backgroundColor: 'green', borderWidth:2}}><Text style={{textAlign: 'center'}}>a</Text></View>
          </TouchableOpacity>    
          <TouchableOpacity onPress={() => {this.onPressLayout('b')}}>
              <View style={{width: 40, height: 40,backgroundColor: 'green', borderWidth:2}}><Text style={{textAlign: 'center'}}>b</Text></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.onPressLayout('c')}}>
              <View style={{width: 40, height: 40,backgroundColor: 'green', borderWidth:2}}><Text style={{textAlign: 'center'}}>c</Text></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.onPressLayout('d')}}>
              <View style={{width: 40, height: 40,backgroundColor: 'green', borderWidth:2}}><Text style={{textAlign: 'center'}}>d</Text></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.onPressLayout('e')}}>
              <View style={{width: 40, height: 40,backgroundColor: 'green', borderWidth:2}}><Text style={{textAlign: 'center'}}>e</Text></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.onPressLayout('f')}}>
              <View style={{width: 40, height: 40,backgroundColor: 'green', borderWidth:2}}><Text style={{textAlign: 'center'}}>f</Text></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.onPressLayout('g')}}>
              <View style={{width: 40, height: 40,backgroundColor: 'green', borderWidth:2}}><Text style={{textAlign: 'center'}}>g</Text></View>
          </TouchableOpacity>
          </View>
          <View style={{ flex:1, flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => {this.onPressLayout('h')}}>
              <View style={{width: 40, height: 40,backgroundColor: 'green', borderWidth:2}}><Text style={{textAlign: 'center'}}>h</Text></View>
          </TouchableOpacity>    
          <TouchableOpacity onPress={() => {this.onPressLayout('i')}}>
              <View style={{width: 40, height: 40,backgroundColor: 'green', borderWidth:2}}><Text style={{textAlign: 'center'}}>i</Text></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.onPressLayout('j')}}>
              <View style={{width: 40, height: 40,backgroundColor: 'green', borderWidth:2}}><Text style={{textAlign: 'center'}}>j</Text></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.onPressLayout('k')}}>
              <View style={{width: 40, height: 40,backgroundColor: 'green', borderWidth:2}}><Text style={{textAlign: 'center'}}>k</Text></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.onPressLayout('l')}}>
              <View style={{width: 40, height: 40,backgroundColor: 'green', borderWidth:2}}><Text style={{textAlign: 'center'}}>l</Text></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.onPressLayout('m')}}>
              <View style={{width: 40, height: 40,backgroundColor: 'green', borderWidth:2}}><Text style={{textAlign: 'center'}}>m</Text></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.onPressLayout('n')}}>
              <View style={{width: 40, height: 40,backgroundColor: 'green', borderWidth:2}}><Text style={{textAlign: 'center'}}>n</Text></View>
          </TouchableOpacity>
          </View>
        </View>
        
      </View>
      
    )
  }

  componentWillMount() {
    this.randomWord()
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