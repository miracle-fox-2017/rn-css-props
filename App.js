import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screen/HomeScreen'
import GameScreen from './screen/GameScreen'
import { Provider } from 'react-redux'

const Navigator = StackNavigator({
	Home: {
   		screen : HomeScreen,
		navigationOptions: {
      	 	headerTitle: 'Guess CSS Welcome',
		}
	},
	Game: {
		screen: GameScreen,
		navigationOptions: {
			headerTitle: 'Game'
		}
	}
})
export default class App extends React.Component {
  render() {
    return (
    	<Provider store={store}>
      	<Navigator />
      	</Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
