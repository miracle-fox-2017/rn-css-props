import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux'

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      letter_used: [],
      turns_left: '',
      game_status: ''
    }
  }
  getAlphabet(word) {

  }
  render() {
    return (
      <View style={styles.container}>
        <Text> Guess CSS Props </Text>
        <TextInput style={styles.textInput}
          onChangeText={() => this.setState({ letter_used: text })} />
        <Text>Letter Used :  </Text>

        <Button title="A" onPress={() => this.getAlphabet("A")} />
        <Button title="B" onPress={() => this.getAlphabet("B")} />
        <Button title="C" onPress={() => this.getAlphabet("C")} />
        <Button title="D" onPress={() => this.getAlphabet("D")} />
        <Button title="E" onPress={() => this.getAlphabet("E")} />
        <Button title="F" onPress={() => this.getAlphabet("F")} />
        <Button title="G" onPress={() => this.getAlphabet("G")} />
        <Button title="H" onPress={() => this.getAlphabet("H")} />
        <Button title="I" onPress={() => this.getAlphabet("I")} />
        <Button title="J" onPress={() => this.getAlphabet("J")} />
        <Button title="K" onPress={() => this.getAlphabet("K")} />
        <Button title="L" onPress={() => this.getAlphabet("L")} />
        <Button title="M" onPress={() => this.getAlphabet("M")} />
        <Button title="N" onPress={() => this.getAlphabet("N")} />
        <Button title="O" onPress={() => this.getAlphabet("O")} />
        <Button title="P" onPress={() => this.getAlphabet("P")} />
        <Button title="Q" onPress={() => this.getAlphabet("Q")} />
        <Button title="R" onPress={() => this.getAlphabet("R")} />
        <Button title="S" onPress={() => this.getAlphabet("S")} />
        <Button title="T" onPress={() => this.getAlphabet("T")} />
        <Button title="U" onPress={() => this.getAlphabet("U")} />
        <Button title="V" onPress={() => this.getAlphabet("V")} />
        <Button title="W" onPress={() => this.getAlphabet("W")} />
        <Button title="X" onPress={() => this.getAlphabet("X")} />
        <Button title="Y" onPress={() => this.getAlphabet("Y")} />
        <Button title="Z" onPress={() => this.getAlphabet("Z")} />
      </View>
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
  textInput: {
    height: 40,
    width: 100
  }
});

export default Game
