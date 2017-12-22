import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppsScreen from './components'
import { Provider } from 'react-redux'
import { store } from './stores'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppsScreen/>
      </Provider>
    );
  }
}
