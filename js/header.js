import React from "react"
import { Link } from 'react-router'

export default React.createClass({

  render () {
    return (
      <nav>
        <header className="header">
          <h1 className="headerText"> Retro Pigskin </h1>
        </header>
        <Link to="/" className="navLink"> Home </Link>
        <Link to="/search" className="navLink"> Search </Link>
        <Link to="/blog" className="navLink"> Blog </Link>
      </nav>
    )
  }
})
