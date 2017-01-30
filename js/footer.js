import React from "react"
import { Link } from 'react-router'


export default React.createClass({

  render () {
    return (
      <section>
        <footer>
          <nav>
            <Link to="/projects" className="navLink"> View Projects </Link>
            <Link to="/" className="navLink"> Home </Link>
            <Link to="/blog" className="navLink"> Blog </Link>
          </nav>
        </footer>
      </section>
    )
  }
})
