import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


class Welcome extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (

      <Button title="Go to The Game"
        onPress={() => navigate('Game')} />

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


export default Welcome