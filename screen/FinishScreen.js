import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet,
         Text,
         View,
         Button
       } from 'react-native'

import { StackNavigator } from 'react-navigation'

class FinishScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Guess CSS Props',
    headerStyle: { marginTop: 24 },
  }

  constructor() {
    super()
    this.state = {
      status: ''
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>YOU WIN!!!!!</Text>
        <Text>YOU LOSE :( </Text>
        <Button title='Play Again' onPress = { () => navigate('Main') }/>
      </View>
    )
  }
}

// const mapStateToProps = (state) => {
//   return ({
//
//   })
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return ({
//
//   })
// }

export default FinishScreen
// export default connect(mapStateToProps, mapDispatchToProps)(FinishScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
