import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addNewUser } from '../actions'
import { StyleSheet, TextInput, View, Text} from 'react-native';
import { Button } from 'react-native-elements'

class WinPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
  }
  render() {
    return (
    <View style={styles.container}>
      <Text>You Win</Text>
    </View>
    );
  }
}

export default connect(
  null,
  null
)(WinPage)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
