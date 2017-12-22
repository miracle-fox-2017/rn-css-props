import React from 'react';
import { StyleSheet,
		View, 
		Text, 
		Button,
		TouchableOpacity,
		Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class GameState extends  React.Component {
  constructor(props){
    super()
    this.state= {
      used: [],
      turns: 5,
      status: 'Good'
    }
  }   
	render() {
		return (
	       <View style={styles.container}>
	         <Text> Used: {this.state.used} </Text>
           <Text> Turns: {this.state.turns} </Text>
           <Text> Game Status: {this.state.status} </Text>              
	      </View>			
		)
	}
}
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
