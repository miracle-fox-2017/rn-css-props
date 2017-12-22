import React from 'react'
import {
  Button,
  View
} from 'react-native'
import {saveWords} from './actions/wordsActions'
import {connect} from 'react-redux'

class FirstScreen extends React.Component{
  constructor(){
    super()
  }
  
  static navigationOptions = {
    title: 'RN CSS'
  }
  
  componentDidMount(){
    const randomWords = [
      'background',
      'border',
      'clear',
      'cursor',
      'display',
      'flex',
      'font',
      'grid',
      'height',
      'width'
    ]
    this.props.setWords(randomWords)
  }
  
  render() {
    const { navigate  } = this.props.navigation
    return(
      <View>
        <Button title="Start Game" onPress = { () => navigate('Main')}></Button>
      </View>
    )
  }
}

const mapStateToProps = null

const mapDispatchToProps = (dispatch) => {
  return {
    setWords: (words) => dispatch(saveWords(words))
  }
}

const connectedFirstScreen = connect(mapStateToProps,mapDispatchToProps)(FirstScreen)
export default connectedFirstScreen
