import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import {setjawaban} from './actions'
import {setInitialTebakan} from './actions'
import {setInitialKesempatan} from './actions'
import {kosongKanHuruf} from './actions'

class Hasil extends React.Component {

  componentWillMount() {
    var randomNumber = Math.floor(Math.random() * 8)
    this.props.setjawaban(randomNumber)
    this.props.setInitialTebakan(randomNumber)
    this.props.setInitialKesempatan()
    this.props.kosongKanHuruf()
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2200cb'
      }}>
        <View style={{width: 200, height: 100}}>
          {this.props.pesan === "SAYANG SEKALI ANDA KALAH" ? (
            <Text style={{textAlign: 'center', fontSize: 70, color: 'white'}}>T_T</Text>
          ) : (
            <Text style={{textAlign: 'center', fontSize: 70, color: 'white'}}>^-^</Text>
          )}
        </View>
        <View style={{width: 300, height: 70}}>
          <Text style={{textAlign: 'center', fontSize: 26, color: 'white'}}>{this.props.pesan}</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('pesan chui', state)
  return {
    pesan: state.pesan
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setjawaban: (index) => dispatch(setjawaban(index)),
    setInitialTebakan: (index) => dispatch(setInitialTebakan(index)),
    setInitialKesempatan: () => dispatch(setInitialKesempatan()),
    kosongKanHuruf: () => dispatch(kosongKanHuruf())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hasil)
