import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screen/HomeScreen'
import GameScreen from './screen/GameScreen'
import FinishScreen from './screen/FinishScreen'
import { Provider } from 'react-redux'
import store from './store'

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
	},
	Finish: {
		screen: FinishScreen,
		navigationOptions: {
			headerTitle: 'Finish Screen'
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
