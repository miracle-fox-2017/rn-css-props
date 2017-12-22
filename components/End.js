import React,{Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native';

class End extends Component {
  backToPlay(){
    this.props.navigation.navigate('Play');
  }
  render(){
    return(
      <View>
        <Text>You</Text>
        <View>
          <Button title="Play Again" onPress={() => this.backToPlay()}></Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center'
  }
});

export default End;
