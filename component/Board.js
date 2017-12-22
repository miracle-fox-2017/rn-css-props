import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Board extends React.Component {

  onPressLayout(id){
    console.log(id)
  }
  render() {
    return (
      <View style={styles.container}>
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
        </View>
        
      </View>
    )
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