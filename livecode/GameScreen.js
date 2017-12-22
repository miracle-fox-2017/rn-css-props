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
    this.state = {
      words: props.heroes,
      // currentPlayer: 'x'
    }
  }
  
  render() {
    {console.log(this.state.cells)}
    debugger
    return (
      <View style={styles.container}>
        <Text>{this.state.words[0]}</Text>
        <View style= {styles.board}>
            <TouchableOpacity onPress={() => this.changeColumn(0) }><Text style ={styles.cell}>{this.state.cells[0]}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.changeColumn(1) }><Text style ={styles.cell}>{this.state.cells[1]}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.changeColumn(2) }><Text style ={styles.cell}>{this.state.cells[2]}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.changeColumn(3) }><Text style ={styles.cell}>{this.state.cells[3]}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.changeColumn(4) }><Text style ={styles.cell}>{this.state.cells[4]}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.changeColumn(5) }><Text style ={styles.cell}>{this.state.cells[5]}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.changeColumn(6) }><Text style ={styles.cell}>{this.state.cells[6]}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.changeColumn(7) }><Text style ={styles.cell}>{this.state.cells[7]}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.changeColumn(8) }><Text style ={styles.cell}>{this.state.cells[8]}</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
  
  // changeColumn (e) {
  //   let temp = this.state.cells
  //   temp[e] = this.state.currentPlayer
  //   let nextPlayer = ''
  //   this.state.currentPlayer === 'o' ? nextPlayer = 'x' : nextPlayer = 'o'
  //   this.setState({
  //     cells: temp,
  //     currentPlayer: nextPlayer
  //   })
  // }
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
    width: (Dimensions.get('window').width/4),
    height: (Dimensions.get('window').height/6),
    backgroundColor: 'skyblue',
    marginHorizontal: Dimensions.get('window').width/120,
    marginVertical: Dimensions.get('window').height/20,
    fontSize: 80
    // margin: Dimensions.get('window').width/20 Dimensions.get('window').height/20
    // marginLeft : (Dimensions.get('window').width/20),
    // marginBottom: (Dimensions.get('window').height/20)
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
