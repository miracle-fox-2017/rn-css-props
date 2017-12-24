import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home'

export default class Boardgame extends React.Component {

  constructor() {
    super()
  }

  ketik(huruf) {
    console.log(huruf)
  }

  render() {

    var alpabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    var keyboard = alpabets.map((alpabet, index) => {
      return (
        <TouchableOpacity key={index} onPress={() => {this.ketik(alpabet)}}>
          <View style={{width: 40, height: 40, backgroundColor: '#006978', margin: 8}}>
            <Text style={{textAlign: 'center', fontSize: 26}}>{alpabet}</Text>
          </View>
        </TouchableOpacity>
      )
    })
    return (
      <View style={{flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <View style={{width: 340, height: 70, backgroundColor: 'red'}}>
          {/* Bagian jawaban */}
        </View>
        <View style={{width: 340, height: 70, backgroundColor: 'skyblue'}}>
          {/*Bagian Keterangan*/}
        </View>
        <View style={{ width: 340, height: 280, backgroundColor: 'steelblue'}}>
          {/*Bagian keyboard*/}
          <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
            {keyboard}
          </View>
        </View>
      </View>
    );
  }
}
