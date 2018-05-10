import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import {Button} from 'react-native-elements'

class Board extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    // const {params} = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>S T _ L E</Text>
        <View style={{ height:200, width:460 , backgroundColor:'blue'}}>
          <View style={{flex:1, flexDirection:'row'}}>
            <Button style={{width:20}} title='Q' />
            <Button style={{ width: 20 }} title='W' />
            <Button style={{ width: 20 }} title='E' />
            <Button style={{ width: 20 }} title='R' />
            <Button style={{ width: 20 }} title='T' />
            <Button style={{ width: 20 }} title='Y' />
            <Button style={{ width: 20 }} title='N' />
            
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Button style={{ width: 20 }} title='A' />
            <Button style={{ width: 20 }} title='S' />
            <Button style={{ width: 20 }} title='D' />
            <Button style={{ width: 20 }} title='F' />
            <Button style={{ width: 20 }} title='G' />
            <Button style={{ width: 20 }} title='H' />
            <Button style={{ width: 20 }} title='M' />
            
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Button style={{ width: 20 }} title='J' />
            <Button style={{ width: 20 }} title='U' />
            <Button style={{ width: 20 }} title='I' />
            <Button style={{ width: 20 }} title='K' />
            <Button style={{ width: 20 }} title='L' />
            <Button style={{ width: 20 }} title='O' />
            
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Button style={{ width: 20 }} title='P' />
            <Button style={{ width: 20 }} title='Z' />
            <Button style={{ width: 20 }} title='X' />
            <Button style={{ width: 20 }} title='C' />
            <Button style={{ width: 20 }} title='V' />
            <Button style={{ width: 20 }} title='B' />
            
          </View>
        </View>
        {/* <View style={{width :300, height:50, backgroundColor:'blue' }}> */}
          {/* <View style={{width: 20, height: 20, backgroundColor:'red', borderWidth:2}}>

          </View> */}
        {/* </View> */}
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Board