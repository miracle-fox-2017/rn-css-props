import React from 'react'
import { Route, Link } from 'react-router-dom'
class Home extends React.Component {

render () {
  return (
    <div>
      <h1>SELAMAT DATANG DI GAME GUESS CSS PROPS</h1>
        <button><Link to="/game">Mulai</Link></button>
    </div>
  )
}


}

export default Home
