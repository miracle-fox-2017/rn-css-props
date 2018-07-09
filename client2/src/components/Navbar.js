import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import Game from './Game'

class Navbar extends React.Component {
  render () {
    return (
      <div>
       <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand">GUESS CSS PROPS</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
            </ul>
          </div>
        </div>
        </nav>
        <Route exact path="/" component={Home}/>
        <Route exact path="/game" component={Game}/>
      </div>

    )
  }

}

export default Navbar
