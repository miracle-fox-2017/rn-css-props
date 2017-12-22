import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Welcome extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <Text>Welcome</Text>
        <Button title="Go to The Game"
          onPress={() => navigate('Game')} />
        )
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
