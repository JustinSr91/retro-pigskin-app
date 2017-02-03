import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section className="search__section">
        <h1 className="search__heading"> Search Games by Year </h1>
        <a href="https://github.com/JustinSr91/assignments/tree/master/3.3-accordion"
           target="_blank"
           className="group__link">
          <li className="game__year"> 1998 </li>
        </a>
        <a href="https://github.com/JustinSr91/assignments/tree/master/1.4"
           target="_blank"
           className="group__link">
          <li className="game__year"> 1999 </li>
        </a>
        <a href="https://github.com/JustinSr91/assignments/tree/master/4.3-refactor-calculator"
           target="_blank"
           className="group__link">
          <li className="game__year"> 2000 </li>
        </a>
        <a href="https://github.com/JustinSr91/assignments/tree/master/3.3-accordion"
           target="_blank"
           className="group__link">
          <li className="game__year"> 2001 </li>
        </a>
        <a href="https://github.com/JustinSr91/assignments/tree/master/3.3-accordion"
           target="_blank"
           className="group__link">
          <li className="game__year"> 2002 </li>
        </a>
        <a href="https://github.com/JustinSr91/assignments/tree/master/3.3-accordion"
           target="_blank"
           className="group__link">
          <li className="game__year"> 2003 </li>
        </a>
      </section>
    )
  }
})
