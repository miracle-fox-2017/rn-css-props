import React, { Component } from 'react'
import { StyleSheet, Text, ViewPagerAndroid, View } from "react-native";
import {connect} from 'react-redux'

export class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Row1}>
          <Text>Userd: </Text>
          <Text>Turn left: </Text>
          <Text>Game status: </Text>
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
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
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
    flex:1,
    flexDirection:'row',
    height: '50%'
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
    color: 'black',
    margin: 10
  }
});
