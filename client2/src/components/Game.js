import React from 'react'
import { connect } from 'react-redux'

class Game extends React.Component {
  constructor () {
    super ()
    this.state = {
      kata: ''
    }
  }

handleCLickA  () {
  var kata = this.state.kata.concat('A');
  this.setState({ kata: kata })
}
handleCLickB  () {
  console.log('B');
}
handleCLickC  () {
  console.log('C');
}
handleCLickD  () {
  console.log('D');
}
handleCLickE  () {
  console.log('E');
}
handleCLickF  () {
  console.log('F');
}
handleCLickG  () {
  console.log('G');
}
handleCLickH  () {
  console.log('H');
}
handleCLickI  () {
  console.log('I');
}
handleCLickJ  () {
  console.log('J');
}
handleCLickK  () {
  console.log('K');
}
handleCLickL  () {
  console.log('L');
}
handleCLickM  () {
  console.log('M');
}

handleCLickN  () {
  console.log('N');
}
handleCLickO  () {
  console.log('O');
}
handleCLickP  () {
  console.log('P');
}
handleCLickQ  () {
  console.log('Q');
}
handleCLickR  () {
  console.log('R');
}
handleCLickS  () {
  console.log('S');
}

handleCLickT  () {
  console.log('T');
}
handleCLickU  () {
  console.log('U');
}
handleCLickV  () {
  console.log('V');
}
handleCLickW  () {
  console.log('W');
}
handleCLickX  () {
  console.log('X');
}
handleCLickY  () {
  console.log('Y');
}
handleCLickZ  () {
  console.log('Z');
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
        <h1>Kata-katanya</h1>
      </div>
    </div>
  )
 }
}




export default (Game)
