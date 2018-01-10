import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {inputUsername} from '../actions'

class WelcomePage extends Component {
  constructor () {
    super()
    this.state = {
      username: ''
    }
  }

  handleInput (e) {
    console.log('event terjadi', e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  inputName (e) {
    const name = this.state.username
    alert('Namanya ', name)
    this.props.getUser(name)
  }

  render () {
    return (
      <div>
        <h1>WELCOME PAGE</h1>
        <input type="text" name="username" value={this.state.username} onChange={this.handleInput.bind(this)}/>
        <button onClick={this.inputName.bind(this)}><Link to="/main">Let's Play</Link></button>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    props: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: (username) => {
      dispatch(inputUsername(username))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage)
