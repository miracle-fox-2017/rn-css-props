import React from 'react';
import { StyleSheet,
		View, 
		Text, 
		Button,
		TouchableOpacity,
		Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends  React.Component {
	render() {
		const { navigate,state } = this.props.navigation
		return (
	       <View style={styles.container}>
	         <TouchableOpacity onPress={() => navigate('Game')}> 
	         <Text style={styles.box} > New Game </Text>
	         </TouchableOpacity>	       	
	      </View>			
		)
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 50,
    fontSize: 32,
    backgroundColor: 'green',
    textAlign: 'center',
    alignItems: 'center'
  }
});
