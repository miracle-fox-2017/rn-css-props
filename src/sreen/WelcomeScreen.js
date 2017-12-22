import React, { Component } from 'react'
import {StyleSheet, Button,  Text, ViewPagerAndroid, View } from "react-native";

export default class WelcomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          style={{
            width: '100%',
            height: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            backgoundColor: '#457B9D'
          }}
          onPress={ () => navigate('Main')}
          title="Play Game"
          color="#841584"
          />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
