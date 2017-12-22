import React,{Component} from 'react';
import {View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';

import Home from './components/Home';
import Play from './components/Play';
import End from './components/End';

const Navigator = StackNavigator({
  Home : {
    screen : Home
  },
  Play : {
    screen : Play
  },
  End : {
    screen : End
  }
});

class App extends Component {
  render(){
    return(
      <Navigator/>
    )
  }
}

export default App;
