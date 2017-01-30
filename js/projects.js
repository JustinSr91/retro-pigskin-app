import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section>
        <h1 className="projectsHeading"> Latest Projects </h1>
        <a href="https://github.com/JustinSr91/assignments/tree/master/3.3-accordion"
           target="_blank"
           className="projectLink">
          <li className="projectList"> NBA Accordion </li>
        </a>
        <p> Once clicked, the Accordion image slides out, and text that provides details about the image is shown. </p>
        <a href="https://github.com/JustinSr91/assignments/tree/master/1.4"
           target="_blank"
           className="projectLink">
          <li className="projectList"> YouTube Mock </li>
        </a>
        <p> Here I created a non-functioning mock version of YouTube. The styling of the page matches the authentic YouTube website. </p>
        <a href="https://github.com/JustinSr91/assignments/tree/master/4.3-refactor-calculator"
           target="_blank"
           className="projectLink">
          <li className="projectList"> Calculator App </li>
        </a>
        <p> Here I created my own version of a Calculator, using React JS functionality. </p>
      </section>
    )
  }
})
