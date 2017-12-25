import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home'
import Hasil from './Hasil'
import {connect} from 'react-redux'

import {setjawaban} from './actions'
import {setTebakan} from './actions'
import {kurangiKesempatan} from './actions'
import {tambahKanHuruf} from './actions'
import {setMenang} from './actions'
import {setKalah} from './actions'

class Boardgame extends React.Component {

  constructor() {
    super()

    this.state = {
      counter: 0,

    }
  }

  ketik(huruf) {
    if(this.props.jawaban.indexOf(huruf.toLowerCase()) > -1) {
      this.props.jawaban.forEach((jawab, index) => {
        if(jawab === huruf.toLowerCase()) {
          this.props.setTebakan(huruf, index)
        }
      })
    }
    this.props.tambahKanHuruf(huruf)
    this.cekPemenang(huruf)
    this.setState({
      counter: Math.random()
    })
  }

  cekPemenang(huruf) {
    const {navigate} = this.props.navigation
    if(this.props.tebakan.indexOf('') == -1 || this.props.kesempatan == 1) {
      if(this.props.tebakan.indexOf('') == -1) {
        this.props.setMenang()
      } else {
        this.props.setKalah()
      }
      this.props.navigation.navigate('Hasil')
    }
    else if(this.props.jawaban.indexOf(huruf.toLowerCase()) === -1) {
      this.props.kurangiKesempatan()
    }
  }

  render() {
    var alpabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    //Munculkan keyboard
    var keyboard = alpabets.map((alpabet, index) => {
      return (
        <TouchableOpacity key={index} onPress={() => {this.ketik(alpabet)}}>
          {this.props.InputHuruf.indexOf(alpabet) > -1 ? (
            <View style={{width: 40, height: 40, backgroundColor: 'red', margin: 8}}>
              <Text style={{textAlign: 'center', fontSize: 26}}>{alpabet}</Text>
            </View>
          ) : (
            <View style={{width: 40, height: 40, backgroundColor: '#006978', margin: 8}}>
              <Text style={{textAlign: 'center', fontSize: 26}}>{alpabet}</Text>
            </View>
          )}
        </TouchableOpacity>
      )
    })

    console.log(this.props.tebakan)
    var kolomTebak = this.props.tebakan.map((tebak, index) => {
      return (
        <View key={index} style={{width: 30, height: 30, backgroundColor: '#006978', margin: 6}}>
          <Text style={{textAlign: 'center', fontSize: 22}}>{tebak}</Text>
        </View>
      )
    })

    return (
      <View style={{flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <View style={{width: 340, height: 70, backgroundColor: 'red'}}>
          <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
            {kolomTebak}
          </View>
        </View>
        <View style={{width: 340, height: 70, backgroundColor: 'skyblue'}}>
          <Text style={{textAlign: 'center', fontSize: 18}}>Kesempatan:{this.props.kesempatan}</Text>
          <Text style={{textAlign: 'center', fontSize: 18}}>Tebakan: {this.props.InputHuruf}</Text>
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

const mapStateToProps = (state) => {
  return {
    tebakan: state.tebakan,
    jawaban: state.jawaban,
    kesempatan: state.kesempatan,
    InputHuruf: state.InputHuruf
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setjawaban: (index) => dispatch(setjawaban(index)),
    setTebakan: (huruf, index) => dispatch(setTebakan(huruf, index)),
    kurangiKesempatan: () => dispatch(kurangiKesempatan()),
    tambahKanHuruf: (huruf) => dispatch(tambahKanHuruf(huruf)),
    setMenang: () => dispatch(setMenang()),
    setKalah: () => dispatch(setKalah())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Boardgame)
