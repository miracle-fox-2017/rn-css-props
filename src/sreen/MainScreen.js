import React, { Component } from 'react'
import { StyleSheet, Text, ViewPagerAndroid, View, Button } from "react-native";
import {connect} from 'react-redux'
import {getWord} from '../actions'

export class MainScreen extends Component {
  constructor () {
    super()
    this.state = {
    }
  }
  componentWillMount () {
    this.props.getWord()
  }
  render() {
    let key = 'qwertyuiopasdfghjklzxcvbnm'.split('')
    Array.prototype.shuffled = function() {
      return this.map(function(n){ return [Math.random(), n] })
                 .sort().map(function(n){ return n[1] });
    }
    let randomKey = ''
    if(this.props.word) {
      randomKey = this.props.word.split('').shuffled()
    }
    return (
      <View style={styles.container}>
       <View style={styles.Row}>
        <View style={styles.Row1}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 20,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            color: '#E63946'
          }}>
          {this.props.word}</Text>
        </View>
        <View style={styles.Row}>
          <Text>Userd: {randomKey.join(',')}</Text>
          <Text>Turn left: </Text>
          <Text>Game status: </Text>
        </View>
      </View>
        <View style={styles.Row2}>
          {key.map((k, idx) => {
            return <View key={idx} style={{padding:10}}><Button disabled={false} styleDisabled={{color:'black'}} color="#E63946" style={{padding:50, width: 50, height: 50}} title={k}></Button></View>
          })}
        </View>
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  console.log('INI STATE', state)
  return {
    word: state.word
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getWord : () => dispatch(getWord())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FAEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Row1 : {
    marginTop: 23,
    flexDirection:'row',
    
  },
  Row : {
    height:'50%'
  },
  Row2 : {
    flexDirection:'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Box : {
    fontSize: 20,
    padding:50,
    backgroundColor: '#E63946'
  }
});
