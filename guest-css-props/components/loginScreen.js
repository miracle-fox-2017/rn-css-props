import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addNewUser } from '../actions'
import { StyleSheet, TextInput, View} from 'react-native';
import { Button } from 'react-native-elements'

class LoginForm extends Component {
  constructor(props) {
    super(props)
  }
  loginUser () {
    this.props.addNewUser(username)
  }
  render() {
    return (
    <View style={styles.container}>
      <TextInput
        style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
      />
      <Button
        title='Login'
        onPress={() => this.loginUser()}
      />
    </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNewUser: (username) => {
      dispatch(addNewUser(username))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(LoginForm)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
