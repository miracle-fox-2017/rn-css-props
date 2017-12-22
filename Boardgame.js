import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home'

export default class Boardgame extends React.Component {

  constructor() {
    super()

    this.state = {
      kata: [
        'border',
        'clear',
        'cursor',
        'display',
        'flex',
        'font',
        'grid',
        'heigth',
        'width'
      ]
    }
  }

  ketik = (huruf) => {
    console.log(huruf)
  }
  render() {
    const Navigasi = StackNavigator({
      Home: {screen: Home}
    })
    var arrayKata = this.state.kata[0].split('')
    console.log(arrayKata)

    var katarandom = arrayKata.map((acak) => {
      return(
        <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
          <Text style={{textAlign: 'center', fontSize: 14}}>{acak}</Text>
        </View>
      )
    })


    return (
      <View style={{backgroundColor: 'orange', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{width: 480, height: 40, backgroundColor: 'red'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            {katarandom}
          </View>
        </View>
        <Text>Turn left: 3</Text>
        <View style={{width: 280, height: 160, backgroundColor: 'red'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => this.ketik("A")}>
              <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
                <Text style={{textAlign: 'center', fontSize: 14}}>A</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.ketik("B")}>
            <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
              <Text style={{textAlign: 'center', fontSize: 14}}>B</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.ketik("C")}>
          <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
            <Text style={{textAlign: 'center', fontSize: 14}}>C</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.ketik("D")}>
        <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
          <Text style={{textAlign: 'center', fontSize: 14}}>D</Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => this.ketik("E")}>
      <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
        <Text style={{textAlign: 'center', fontSize: 14}}>E</Text>
      </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => this.ketik("F")}>
    <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
      <Text style={{textAlign: 'center', fontSize: 14}}>F</Text>
    </View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.ketik("G")}>
  <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
    <Text style={{textAlign: 'center', fontSize: 14}}>G</Text>
  </View>
</TouchableOpacity>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => this.ketik("H")}>
              <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
                <Text style={{textAlign: 'center', fontSize: 14}}>H</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.ketik("I")}>
            <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
              <Text style={{textAlign: 'center', fontSize: 14}}>I</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.ketik("J")}>
          <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
            <Text style={{textAlign: 'center', fontSize: 14}}>J</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.ketik("K")}>
        <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
          <Text style={{textAlign: 'center', fontSize: 14}}>K</Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => this.ketik("L")}>
      <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
        <Text style={{textAlign: 'center', fontSize: 14}}>L</Text>
      </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => this.ketik("M")}>
    <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
      <Text style={{textAlign: 'center', fontSize: 14}}>M</Text>
    </View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.ketik("N")}>
  <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
    <Text style={{textAlign: 'center', fontSize: 14}}>N</Text>
  </View>
</TouchableOpacity>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => this.ketik("O")}>
              <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
                <Text style={{textAlign: 'center', fontSize: 14}}>O</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.ketik("P")}>
            <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
              <Text style={{textAlign: 'center', fontSize: 14}}>P</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.ketik("Q")}>
          <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
            <Text style={{textAlign: 'center', fontSize: 14}}>Q</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.ketik("R")}>
        <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
          <Text style={{textAlign: 'center', fontSize: 14}}>R</Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => this.ketik("s")}>
      <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
        <Text style={{textAlign: 'center', fontSize: 14}}>S</Text>
      </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => this.ketik("T")}>
    <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
      <Text style={{textAlign: 'center', fontSize: 14}}>T</Text>
    </View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.ketik("U")}>
  <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
    <Text style={{textAlign: 'center', fontSize: 14}}>U</Text>
  </View>
</TouchableOpacity>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => this.ketik("V")}>
              <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
                <Text style={{textAlign: 'center', fontSize: 14}}>V</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.ketik("W")}>
            <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
              <Text style={{textAlign: 'center', fontSize: 14}}>W</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.ketik("X")}>
          <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
            <Text style={{textAlign: 'center', fontSize: 14}}>X</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.ketik("Y")}>
        <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
          <Text style={{textAlign: 'center', fontSize: 14}}>Y</Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => this.ketik("Z")}>
      <View style={{width: 40, height: 40, borderWidth: 2, backgroundColor: 'yellow'}}>
        <Text style={{textAlign: 'center', fontSize: 14}}>Z</Text>
      </View>
  </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
