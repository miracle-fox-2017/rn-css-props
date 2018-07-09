import React from 'react'
import { connect } from 'react-redux'
import { get_user_kata } from '../actions'
class Game extends React.Component {
  constructor () {
    super ()
    this.state = {
      kata: []
    }
    this.handleCLickA = this.handleCLickA.bind(this)
    this.handleCLickB = this.handleCLickB.bind(this)
    this.handleCLickC = this.handleCLickC.bind(this)
    this.handleCLickD = this.handleCLickD.bind(this)
    this.handleCLickE = this.handleCLickE.bind(this)
    this.handleCLickF = this.handleCLickF.bind(this)
    this.handleCLickG = this.handleCLickG.bind(this)
    this.handleCLickH = this.handleCLickH.bind(this)
    this.handleCLickI = this.handleCLickI.bind(this)
    this.handleCLickJ = this.handleCLickJ.bind(this)
    this.handleCLickK = this.handleCLickK.bind(this)
    this.handleCLickL = this.handleCLickL.bind(this)
    this.handleCLickM = this.handleCLickM.bind(this)
    this.handleCLickN = this.handleCLickN.bind(this)
    this.handleCLickO = this.handleCLickO.bind(this)
    this.handleCLickP = this.handleCLickP.bind(this)
    this.handleCLickQ = this.handleCLickQ.bind(this)
    this.handleCLickR = this.handleCLickR.bind(this)
    this.handleCLickS = this.handleCLickS.bind(this)
    this.handleCLickT = this.handleCLickT.bind(this)
    this.handleCLickU = this.handleCLickU.bind(this)
    this.handleCLickV = this.handleCLickV.bind(this)
    this.handleCLickW = this.handleCLickW.bind(this)
    this.handleCLickX = this.handleCLickX.bind(this)
    this.handleCLickY = this.handleCLickY.bind(this)
    this.handleCLickZ = this.handleCLickZ.bind(this)
  }

componentWillMount () {
  console.log('MASUK SINI');
  this.props.get_user_kata()
}

handleCLickA  () {
  console.log('A');
  this.state.kata.push('A')
}
handleCLickB  () {
  console.log('B');
  this.state.kata.push('B')
}
handleCLickC  () {
  console.log('C');
  this.state.kata.push('C')
}
handleCLickD  () {
  console.log('D');
  this.state.kata.push('D')
}
handleCLickE  () {
  console.log('E');
  this.state.kata.push('E')
}
handleCLickF  () {
  console.log('F');
  this.state.kata.push('F')
}
handleCLickG  () {
  console.log('G');
  this.state.kata.push('G')
}
handleCLickH  () {
  console.log('H');
  this.state.kata.push('H')
}
handleCLickI  () {
  console.log('I');
  this.state.kata.push('I')
}
handleCLickJ  () {
  console.log('J');
  this.state.kata.push('J')
}
handleCLickK  () {
  console.log('K');
  this.state.kata.push('K')
}
handleCLickL  () {
  console.log('L');
  this.state.kata.push('L')
}
handleCLickM  () {
  console.log('M');
  this.state.kata.push('M')
}

handleCLickN  () {
  console.log('N');
  this.state.kata.push('N')
}
handleCLickO  () {
  console.log('O');
  this.state.kata.push('O')
}
handleCLickP  () {
  console.log('P');
  this.state.kata.push('P')
}
handleCLickQ  () {
  console.log('Q');
  this.state.kata.push('Q')
}
handleCLickR  () {
  console.log('R');
  this.state.kata.push('R')
}
handleCLickS  () {
  console.log('S');
  this.state.kata.push('S')
}
handleCLickT  () {
  console.log('T');
  this.state.kata.push('T')
}
handleCLickU  () {
  console.log('U');
  this.state.kata.push('U')
}
handleCLickV  () {
  console.log('V');
  this.state.kata.push('V')
}
handleCLickW  () {
  console.log('W');
  this.state.kata.push('W')
}
handleCLickX  () {
  console.log('X');
  this.state.kata.push('X')
}
handleCLickY  () {
  console.log('Y');
  this.state.kata.push('Y')
}
handleCLickZ  () {
  console.log('Z');
  this.state.kata.push('Z')
}



render () {
  return (
    <div className="container">
      <div className="container-fluid">
        <div>
        <button onClick={this.handleCLickA}>A</button>
        <button onClick={this.handleCLickB}>B</button>
        <button onClick={this.handleCLickC}>C</button>
        <button onClick={this.handleCLickD}>D</button>
        <button onClick={this.handleCLickE}>E</button>
        <button onClick={this.handleCLickF}>F</button>
        <button onClick={this.handleCLickG}>G</button>
        <button onClick={this.handleCLickH}>H</button>
        <button onClick={this.handleCLickI}>I</button>
        <button onClick={this.handleCLickJ}>J</button>
        <button onClick={this.handleCLickK}>K</button>
        <button onClick={this.handleCLickL}>L</button>
        <button onClick={this.handleCLickM}>M</button>
        <button onClick={this.handleCLickN}>N</button>
        <button onClick={this.handleCLickO}>O</button>
        <button onClick={this.handleCLickP}>P</button>
        <button onClick={this.handleCLickQ}>Q</button>
        <button onClick={this.handleCLickR}>R</button>
        <button onClick={this.handleCLickS}>S</button>
        <button onClick={this.handleCLickT}>T</button>
        <button onClick={this.handleCLickU}>U</button>
        <button onClick={this.handleCLickV}>V</button>
        <button onClick={this.handleCLickW}>W</button>
        <button onClick={this.handleCLickX}>X</button>
        <button onClick={this.handleCLickY}>Y</button>
        <button onClick={this.handleCLickZ}>Z</button>
        </div>
      </div>
      <div>
        <h1>{this.props.kata}</h1>
      </div>
    </div>
  )
 }
}

const mapState = (state) => {
  return {
    kata: state.Game.kata
  }
}

const mapAction = (dispatch) => {
  return {
    get_user_kata: () => dispatch(get_user_kata())
  }
}

export default connect (mapState, mapAction)(Game)
