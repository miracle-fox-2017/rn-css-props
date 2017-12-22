import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet,
         Text,
         View,
         Button,
         TouchableOpacity
       } from 'react-native'

import { StackNavigator } from 'react-navigation'

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Guess CSS Props',
    headerStyle: { marginTop: 24 },
  }

  getTouched(touched){
    console.log(touched)
  }

  constructor() {
    super()
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 150 }}>
          <Text style={{ fontSize: 30 }}>s t _ l e</Text>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity onPress = { () => this.getTouched('A') }><View style={styles.button}><Text> A </Text></View></TouchableOpacity>
            <TouchableOpacity onPress = { () => this.getTouched('B') }><View style={styles.button}><Text> B </Text></View></TouchableOpacity>
            <TouchableOpacity onPress = { () => this.getTouched('C') }><View style={styles.button}><Text> C </Text></View></TouchableOpacity>
            <TouchableOpacity onPress = { () => this.getTouched('D') }><View style={styles.button}><Text> D </Text></View></TouchableOpacity>
            <TouchableOpacity onPress = { () => this.getTouched('E') }><View style={styles.button}><Text> E </Text></View></TouchableOpacity>
          </View>
        </View>
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
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'skyblue',
    margin: 2
  }
});
