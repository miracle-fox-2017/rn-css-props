import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet,
         Text,
         View,
         Button,
         TouchableOpacity
       } from 'react-native'

import { StackNavigator } from 'react-navigation'

class MainScreen extends React.Component {
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
          <View style={styles.containerCenter}>
            <Text style={{ fontSize: 30 }}>s t _ l e</Text>
          </View>
          <View style={styles.containerCenter}>
            <Text style={{ fontSize: 10 }}>Used: e,d,a,d,g,</Text>
          </View>
          <View style={styles.containerCenter}>
            <Text style={{ fontSize: 10 }}>Turns Left: 3</Text>
          </View>
          <View style={styles.containerCenter}>
            <Text style={{ fontSize: 10 }}>Game Status: good guess</Text>
          </View>
          <View style={styles.containerCenter}>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('A') }><View style={styles.button}><Text style={styles.keyboard}> A </Text></View></TouchableOpacity>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('B') }><View style={styles.button}><Text style={styles.keyboard}> B </Text></View></TouchableOpacity>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('C') }><View style={styles.button}><Text style={styles.keyboard}> C </Text></View></TouchableOpacity>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('D') }><View style={styles.button}><Text style={styles.keyboard}> D </Text></View></TouchableOpacity>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('E') }><View style={styles.button}><Text style={styles.keyboard}> E </Text></View></TouchableOpacity>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('F') }><View style={styles.button}><Text style={styles.keyboard}> F </Text></View></TouchableOpacity>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('G') }><View style={styles.button}><Text style={styles.keyboard}> G </Text></View></TouchableOpacity>
          </View>
          <View style={styles.containerCenter}>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('H') }><View style={styles.button}><Text style={styles.keyboard}> H </Text></View></TouchableOpacity>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('I') }><View style={styles.button}><Text style={styles.keyboard}> I </Text></View></TouchableOpacity>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('J') }><View style={styles.button}><Text style={styles.keyboard}> J </Text></View></TouchableOpacity>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('K') }><View style={styles.button}><Text style={styles.keyboard}> K </Text></View></TouchableOpacity>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('L') }><View style={styles.button}><Text style={styles.keyboard}> L </Text></View></TouchableOpacity>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('M') }><View style={styles.button}><Text style={styles.keyboard}> M </Text></View></TouchableOpacity>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('N') }><View style={styles.button}><Text style={styles.keyboard}> N </Text></View></TouchableOpacity>
          </View>
          <View style={styles.containerCenter}>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('O') }><View style={styles.button}><Text style={styles.keyboard}> O </Text></View></TouchableOpacity>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('P') }><View style={styles.button}><Text style={styles.keyboard}> P </Text></View></TouchableOpacity>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('Q') }><View style={styles.button}><Text style={styles.keyboard}> Q </Text></View></TouchableOpacity>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('R') }><View style={styles.button}><Text style={styles.keyboard}> R </Text></View></TouchableOpacity>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('S') }><View style={styles.button}><Text style={styles.keyboard}> S </Text></View></TouchableOpacity>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('T') }><View style={styles.button}><Text style={styles.keyboard}> T </Text></View></TouchableOpacity>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('U') }><View style={styles.button}><Text style={styles.keyboard}> U </Text></View></TouchableOpacity>
          </View>
          <View style={styles.containerCenter}>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('V') }><View style={styles.button}><Text style={styles.keyboard}> V </Text></View></TouchableOpacity>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('W') }><View style={styles.button}><Text style={styles.keyboard}> W </Text></View></TouchableOpacity>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('X') }><View style={styles.button}><Text style={styles.keyboard}> X </Text></View></TouchableOpacity>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('Y') }><View style={styles.button}><Text style={styles.keyboard}> Y </Text></View></TouchableOpacity>
            <TouchableOpacity disabled={false} onPress = { () => this.getTouched('Z') }><View style={styles.button}><Text style={styles.keyboard}> Z </Text></View></TouchableOpacity>
          </View>
          <View style={styles.containerCenter}>
            <Button title='Finish' onPress = { () => navigate('Finish') }/>
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

export default MainScreen
// export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  containerCenter: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'skyblue',
    margin: 2,
    height: 50,
    width: 50
  },
  keyboard: {
    fontSize: 40
  }
});
