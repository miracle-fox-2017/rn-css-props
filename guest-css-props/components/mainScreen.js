import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addNewUser } from '../actions'
import { StyleSheet, TextInput, View, Text, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements'

class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tebakan: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit () {
  }
  handleChange(e){
  }
  updateBoard(input){
    console.log(input)
    tempTebakan = this.state.tebakan
    tempTebakan.push(input)

    console.log(tempTebakan.join(''))
    if(tempTebakan.join('') === this.props.guestLib) {
      this.props.navigation.navigate('WinPage')
    }

    this.setState({
      tebakan: tempTebakan
    })
  }
  render() {
    return (
    <View style={styles.container}>
      <View style={{width: 300, height: 300, backgroundColor: 'powderblue'}}>
        <View style={{width: 300, height: 35, backgroundColor: 'red', borderWidth: 2}}>
          <Text>{this.props.guestLib}</Text>
        </View>
        <View style={{width: 300, height: 65, backgroundColor: 'green', borderWidth: 2}}>
          <Text>Used: {this.state.tebakan}</Text>
        </View>
        <View style={{width: 300, height: 200, backgroundColor: 'blue', borderWidth: 2}}>
          <Text>Dsini Keyboard</Text>
          <View style={{flex: 1, flexDirection: 'row', margin: 10}}>
            <TouchableOpacity onPress={() => this.updateBoard('a')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>A</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateBoard('b')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>B</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateBoard('c')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>C</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateBoard('d')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>D</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateBoard('e')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>E</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateBoard('f')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>F</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateBoard('g')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>G</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, flexDirection: 'row', margin: 10}}>
            <TouchableOpacity onPress={() => this.updateBoard('h')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>H</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateBoard('i')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>I</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateBoard('j')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>J</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateBoard('k')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>K</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateBoard('l')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>L</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateBoard('m')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>M</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateBoard('n')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>N</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, flexDirection: 'row', margin: 10}}>
            <TouchableOpacity onPress={() => this.updateBoard('o')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>O</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateBoard('p')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>P</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateBoard('q')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>Q</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateBoard('r')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>R</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateBoard('s')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>S</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateBoard('t')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>T</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateBoard('u')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>U</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, flexDirection: 'row', margin: 10}}>
            <TouchableOpacity onPress={() => this.updateBoard('v')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>V</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateBoard('w')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>W</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateBoard('x')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>X</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateBoard('y')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>Y</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateBoard('z')}>
              <View style={{width: 25, height: 25, backgroundColor: '#8BC34A', borderWidth: 2}}>
                <Text style={{fontSize: 20}}>Z</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    );
  }
  componentWillMount() {
    this.props.addNewUser(this.props.navigation.state.params.username)
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    guestLib: state.libGuest
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
  mapStateToProps,
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
