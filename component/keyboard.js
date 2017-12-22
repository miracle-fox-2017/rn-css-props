import React from 'react';
import { StyleSheet,
		View, 
		Text, 
		Button,
		TouchableOpacity,
		Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Keyboard extends  React.Component {
  constructor(props){
    super()
    this.state= {
      keyboard: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    }
  }   
	render() {
		return (
	       <View style={styles.container}>
	       	<TouchableOpacity><Text style={styles.box} > {this.state.keyboard[0]} </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[1]} </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[2]} </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[3]} </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[4]} </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[5]} </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[6]} </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[7]} </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[8]} </Text></TouchableOpacity>      	
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[9]} </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[10]} </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[11]} </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[12]} </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[13]} </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[14]} </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[15]} </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[16]} </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[17]} </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[18]} </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[19]} </Text></TouchableOpacity>         
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[20]} </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[21]} </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[22]} </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[23]} </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[24]} </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.box} > {this.state.keyboard[25]} </Text></TouchableOpacity>                 
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
  box: {
    backgroundColor: '#f1f1f1',
    width: 30,
    margin: 10,
    alignSelf: 'center',
    fontSize:20,
    textAlign: 'center',
    padding: 0,
    height: 20,
    fontSize:20
  }
});
