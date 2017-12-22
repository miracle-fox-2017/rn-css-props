import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from "./src/sreen/WelcomeScreen";
import MainScreen from "./src/sreen/MainScreen";
import FinishScreen from "./src/sreen/FinishSreen";
import { StackNavigator } from "react-navigation";

const Navigator = StackNavigator({
  Welcome: {
    screen: WelcomeScreen
  },
  Main: {
    screen: MainScreen
  },
  Finish : {
    screen: FinishScreen
  }
})
export default class App extends React.Component {
  render() {
    return (
      <Navigator/>
    );
  }
}


