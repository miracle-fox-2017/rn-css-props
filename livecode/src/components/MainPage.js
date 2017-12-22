import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class MainPage extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h1>Main PAGE</h1>
        <Link to="/gameover">Hit Me</Link>
      </div>
    )
  }

}

export default MainPage