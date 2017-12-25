import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Boardgame from './Boardgame'
import {connect} from 'react-redux'

import {setjawaban} from './actions'
import {setInitialTebakan} from './actions'

class Home extends React.Component {

  settingGame() {
    var randomNumber = Math.floor(Math.random() * 8)
    this.props.setjawaban(randomNumber)
    this.props.setInitialTebakan(randomNumber)
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <View>
        <Text>Masukkan nama anda</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 2}}
        />
        <Button title="Boardgame" onPress={() => {
          this.settingGame()
          navigate('Boardgame')
        }}/>
      </View>
    );
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

const mapStateToProps = (state) => {
  console.log('state dari', state)
  return {
    jawaban: 'saya'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setjawaban: (index) => dispatch(setjawaban(index)),
    setInitialTebakan: (index) => dispatch(setInitialTebakan(index))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
