import React, { Component } from 'react'
import { StyleSheet, Text, ViewPagerAndroid, View } from "react-native";
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
    return (
      <View style={styles.container}>
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
          <View style={styles.Row}>
            <Text>Userd: </Text>
            <Text>Turn left: </Text>
            <Text>Game status: </Text>
          </View>
        </View>
        <View style={styles.Row2}>
          <View style={styles.Box}>
              <Text>a</Text>
          </View>
          <View style={styles.Box}>
              <Text>b</Text>
          </View>
          <View style={styles.Box}>
              <Text>c</Text>
          </View>
          <View style={styles.Box}>
              <Text>d</Text>
          </View>
          <View style={styles.Box}>
              <Text>e</Text>
          </View>
          <View style={styles.Box}>
              <Text>f</Text>
          </View>
          <View style={styles.Box}>
              <Text>g</Text>
          </View>
        </View>
        <View style={styles.Row2}>
          <View style={styles.Box}>
              <Text>h</Text>
          </View>
          <View style={styles.Box}>
              <Text>i</Text>
          </View>
          <View style={styles.Box}>
              <Text>j</Text>
          </View>
          <View style={styles.Box}>
              <Text>k</Text>
          </View>
          <View style={styles.Box}>
              <Text>l</Text>
          </View>
          <View style={styles.Box}>
              <Text>m</Text>
          </View>
          <View style={styles.Box}>
              <Text>n</Text>
          </View>
        </View>
        <View style={styles.Row2}>
          <View style={styles.Box}>
              <Text>o</Text>
          </View>
          <View style={styles.Box}>
              <Text>p</Text>
          </View>
          <View style={styles.Box}>
              <Text>q</Text>
          </View>
          <View style={styles.Box}>
              <Text>r</Text>
          </View>
          <View style={styles.Box}>
              <Text>s</Text>
          </View>
          <View style={styles.Box}>
              <Text>t</Text>
          </View>
          <View style={styles.Box}>
              <Text>u</Text>
          </View>
        </View>
        <View style={styles.Row3}>
          <View style={styles.Box}>
              <Text>v</Text>
          </View>
          <View style={styles.Box}>
              <Text>w</Text>
          </View>
          <View style={styles.Box}>
              <Text>x</Text>
          </View>
          <View style={styles.Box}>
              <Text>y</Text>
          </View>
          <View style={styles.Box}>
              <Text>z</Text>
          </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  Row1 : {
    marginTop: 23,
    flex:1,
    flexDirection:'row',
    height: '50%'
  },
  Row : {
    backgroundColor: '#F3FFBD'
  },
  Row2 : {
    flex:1,
    flexDirection:'row',
    height: 10,
    margin: 10
  },
  Row3 : {
    flex:1,
    flexDirection:'row',
    height: 10,
  },
  Box : {
    flex:1,
    height: 20,
    width: 20,
    backgroundColor:'#B2DBBF',
    alignItems:'center',
    justifyContent:'center',
    margin: 10
  }
});
