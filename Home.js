import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Boardgame from './Boardgame'

export default class Home extends React.Component {
  render() {
    const {navigate} = this.props.navigation
    return (
      <View>
        <Text>Masukkan nama anda</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 2}}
        />
        <Button title="Boardgame" onPress={() => navigate('Boardgame')}/>
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
