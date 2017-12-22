import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addNewUser } from '../actions'
import { StyleSheet, TextInput, View, Text} from 'react-native';
import { Button } from 'react-native-elements'

class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit () {
  }
  handleChange(e){
  }
  render() {
    return (
    <View style={styles.container}>
      <View style={{width: 300, height: 300, backgroundColor: 'powderblue'}}>
        <View style={{width: 300, height: 50, backgroundColor: 'red', borderWidth: 2}}>
          <Text>Dsini tebakan</Text>
        </View>
        <View style={{width: 300, height: 100, backgroundColor: 'green', borderWidth: 2}}>
          <Text>Dsini Status</Text>
        </View>
        <View style={{width: 300, height: 150, backgroundColor: 'blue', borderWidth: 2}}>
          <Text>Dsini Keyboard</Text>
        </View>
      </View>
      <Button
        onPress={() => this.props.navigation.navigate('Main', {username: 'AhmadNizar'})}
        title="Guest"
      />
    </View>
    );
  }
  componentWillMount() {
    this.props.addNewUser(this.props.navigation.state.params.username)
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
)(MainScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
