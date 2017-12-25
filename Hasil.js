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
      <View>
        <Text>{this.props.pesan}</Text>
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
