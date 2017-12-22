import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class GameOver extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h1>Game Over</h1>
        <Link to="/">Hit Me</Link>
      </div>
    )
  }

}

export default GameOver