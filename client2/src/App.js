import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Navbar from './components/Navbar'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar/>
          </div>
        </Router>
        </Provider>
      )
  }
}

export default App;
