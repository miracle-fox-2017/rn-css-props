import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addNewUser } from '../actions'
import { StyleSheet, TextInput, View} from 'react-native';
import { Button } from 'react-native-elements'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit () {
    this.props.addNewUser(this.state.username)
  }
  handleChange(e){
    this.setState({
      username: e.target.value
    })
  }
  render() {
    return (
    <View style={styles.container}>
      <TextInput
        style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
        type="text"
        name="username"
        placeholder="Input Username"
        value={this.state.username}
        onChange={(e) => this.handleChange(e)}
      />
      <Button
        onPress={() => this.props.navigation.navigate('Main', {username: 'AhmadNizar'})}
        title="Login"
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
