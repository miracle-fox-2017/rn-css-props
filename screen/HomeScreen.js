import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet,
         Text,
         View,
         Button
       } from 'react-native'

import { StackNavigator } from 'react-navigation'

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Guess CSS Props',
    headerStyle: { marginTop: 24 },
  }

  constructor() {
    super()
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button title='New Game' onPress = { () => navigate('Main') }/>
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

export default HomeScreen
// export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
