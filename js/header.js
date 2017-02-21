import React from "react"
import { Link } from 'react-router'
import firebase from 'firebase'
import { signInWithPopUp, onSignIn, isUserEqual, signOut } from './fbAuth.js'

var FontAwesome = require('react-fontawesome');

export default React.createClass({
  getDefaultProps() {
    return {
      user: { authed: false }
    }
  },
  render() {
    var signoutButtonClass = this.props.user.authed ? "nav__signOut" : "nav__signout--hide"
    return (
      <nav className="nav__bar">
        <header className="header">
          <h1>Retro Pigskin</h1>
        </header>
          <Link to="/" className="nav__Link"> Home </Link>
          <Link to="/search" className="nav__Link"> Search </Link>
            <div>
              <img ref="userImage" className="nav__currentUserImage" src={this.props.user.picture}>
              </img>
              <button ref="userLogInButton"
                      className="nav__signIn"
                      onClick={this.props.signUserIn}
                      data-js="nav__signIn"> Log In
              </button>
              <button ref="userLogOutButton"
                      className={signoutButtonClass}
                      onClick={this.props.signUserOut}
                      data-js="nav__signOut"> Log Out
              </button>
            </div>
      </nav>
    )
  }
})
