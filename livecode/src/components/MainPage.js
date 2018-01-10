import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {getWords} from '../actions'

class MainPage extends Component {
  constructor() {
    super()
    this.state ={
      statusGame: 'offline',
      wordPlay: null
    }
  }

  componentWillMount () {
    this.props.words()
  }

  startTheGame () {
    const counts = this.props.alphabets.length
    const idx = Math.floor(Math.random(counts))
    this.setState({
      wordPlay: this.props.alphabets[idx],
      statusGame: 'online'
    }, ()=>{
      let kata = this.state.wordPlay.split('')
      kata.map(a =>{
        return <label>a</label>
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Main PAGE</h1>
        <Link to="/gameover">I QUIT</Link>
        <button onClick={()=>this.startTheGame()}>Start The Game </button>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    alphabets: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    words: () => {
      dispatch(getWords())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
