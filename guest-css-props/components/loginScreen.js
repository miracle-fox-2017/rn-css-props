import React, { Component } from 'react';
import { StyleSheet, TextInput, View} from 'react-native';
import { Button } from 'react-native-elements'

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <View style={styles.container}>
      <TextInput
        style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
      />
      <Button
        title='BUTTON'
      />
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
