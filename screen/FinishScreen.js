import React from 'react';
import { StyleSheet,
		View, 
		Text, 
		Button,
		TouchableOpacity,
		Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class GameScreen extends  React.Component {
	render() {
		const { navigate,state } = this.props.navigation
		return (
         <View style={styles.container}>
          <Text> You Win </Text>
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
  h1: {
  	fontSize: 20,
  },
  h3: {
    fontSize: 10,
  },
  box: {
    width: 300,
    height: 300,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 50,
    opacity: 0.9
  }
});
