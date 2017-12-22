import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

import store from './store'

import WelcomePage from './components/WelcomePage';
import MainPage from './components/MainPage';
import GameOver from './components/GameOver';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={WelcomePage} />
            <Route path="/main" component={MainPage} />
            <Route path="/gameover" component={GameOver} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
