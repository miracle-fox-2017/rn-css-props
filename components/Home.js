import React,{Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center'
  },
  button : {
    width : '80%',
    alignSelf : 'center'
  }
});

class Home extends Component {
  static navigationOptions = () => ({
    title : 'Guess CSS Props'
  });
  render(){
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.container}>
        <View style={styles.button}>
          <Button title="New Game" onPress={() => navigate('Play')}/>
        </View>
      </View>
    )
  }
}

export default Home;
